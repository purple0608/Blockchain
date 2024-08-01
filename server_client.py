import socket
import threading

def receive_messages(sock):
    while True:
        try:
            message = sock.recv(1024)
            print("\nReceived message:", message.decode())
        except Exception as e:
            print("Error receiving message:", e)
            break

def handle_server():
    # Get the local IP address and port to listen on
    local_ip = input("Enter your local IP address: ")
    listen_port = int(input("Enter the port to listen on: "))

    # Create a socket object
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    # Bind the socket to the local address
    server_socket.bind((local_ip, listen_port))

    # Listen for incoming connections
    server_socket.listen(5)  # Allow up to 5 connections

    print("Server is listening for incoming connections on port", listen_port)

    # Accept incoming connection
    client_socket, client_address = server_socket.accept()
    print("Connected to:", client_address)

    # Start a thread to receive messages
    receive_thread = threading.Thread(target=receive_messages, args=(client_socket,))
    receive_thread.start()

    # Send and receive messages with the client
    while True:
        message = input("Enter your message: ")
        if message.lower() == 'exit':
            client_socket.send(message.encode())
            break
        client_socket.send(message.encode())

    # Close the client socket
    client_socket.close()
    server_socket.close()

def main():
    # Start the server in a separate thread
    server_thread = threading.Thread(target=handle_server)
    server_thread.start()

    # Get the peer IP address and port to connect to
    peer_ip = input("Enter peer IP address: ")
    peer_port = int(input("Enter peer port: "))

    # Connect to the peer
    peer_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    peer_socket.connect((peer_ip, peer_port))
    print("Connected to peer at", peer_ip, "on port", peer_port)

    # Start a thread to receive messages from peer
    peer_receive_thread = threading.Thread(target=receive_messages, args=(peer_socket,))
    peer_receive_thread.start()

    # Send and receive messages with the peer
    while True:
        message = input("Enter your message: ")
        if message.lower() == 'exit':
            peer_socket.send(message.encode())
            break
        peer_socket.send(message.encode())

    # Close the peer socket
    peer_socket.close()

if __name__ == "__main__":
    main()
