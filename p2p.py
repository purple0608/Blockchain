import socket
import threading

def receive_messages(client_socket):
    while True:
        try:
            message = client_socket.recv(1024)
            print("\nReceived message:", message.decode())
        except Exception as e:
            print("Error receiving message:", e)
            break

def handle_client(client_socket, client_address):
    print("Connected to:", client_address)

    # Start a thread to receive messages
    receive_thread = threading.Thread(target=receive_messages, args=(client_socket,))
    receive_thread.start()

    # Send and receive messages with the client
    while True:
        message = input("Enter your message: ")
        if message.lower() == 'exit':
            break
        client_socket.send(message.encode())

    # Close the client socket
    client_socket.close()
    print("Disconnected from:", client_address)

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

    print("Server is listening for incoming connections...")

    try:
        while True:
            # Accept incoming connection
            client_socket, client_address = server_socket.accept()

            # Handle the client in a new thread
            client_thread = threading.Thread(target=handle_client, args=(client_socket, client_address))
            client_thread.start()
    except KeyboardInterrupt:
        print("Server is shutting down...")
        server_socket.close()

if __name__ == "__main__":
    main()
