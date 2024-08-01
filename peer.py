import socket
import threading

def receive_messages(client_socket):
    while True:
        try:
            message = client_socket.recv(1024)
            if not message:
                print("Connection closed by the server.")
                break
            print("\nReceived message:", message.decode())
        except Exception as e:
            print("Error receiving message:", e)
            break

def handle_client_connection(client_socket):
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

def accept_connections(server_socket):
    while True:
        # Accept incoming connection
        client_socket, client_address = server_socket.accept()
        print("Connected to:", client_address)

        # Start a thread to handle client connection
        client_thread = threading.Thread(target=handle_client_connection, args=(client_socket,))
        client_thread.start()

def main():
    # Get the local IP address and port to listen on
    local_ip = input("Enter your local IP address: ")
    local_port = int(input("Enter the port to listen on: "))

    # Create a socket object
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    # Bind the socket to the local address
    server_socket.bind((local_ip, local_port))

    # Listen for incoming connections
    server_socket.listen(5)  # Allow up to 5 connections

    print("Server is listening for incoming connections on port", local_port)

    # Start a thread to accept incoming connections
    accept_thread = threading.Thread(target=accept_connections, args=(server_socket,))
    accept_thread.start()

    # Communicate with the already connected server
    SERVER_ADDRESS = input("Enter the server IP address: ")
    SERVER_PORT = int(input("Enter the server port: "))

    # Create a socket object
    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    # Connect to the server
    client_socket.connect((SERVER_ADDRESS, SERVER_PORT))
    print("Connected to server at", SERVER_ADDRESS, "on port", SERVER_PORT)

    # Start a thread to receive messages from the server
    receive_thread = threading.Thread(target=receive_messages, args=(client_socket,))
    receive_thread.start()

    # Send and receive messages with the server
    while True:
        message = input("Enter your message: ")
        if message.lower() == 'exit':
            client_socket.send(message.encode())
            break
        client_socket.send(message.encode())

    # Close the client socket
    client_socket.close()

if __name__ == "__main__":
    main()
