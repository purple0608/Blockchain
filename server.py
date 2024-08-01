import socket
import threading

def handle_client(client_socket):
    while True:
        data = client_socket.recv(1024)
        if not data:
            break
        print("Received from client:", data.decode())

        # Echo the received data back to the client
        client_socket.sendall(data)

    # Close the connection with the client
    client_socket.close()

def connect_to_clients(client_ports):
    client_sockets = []
    for port in client_ports:
        client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        client_socket.connect(('127.0.0.1', port))
        client_sockets.append(client_socket)
    return client_sockets

def connect_to_servers(server_ports):
    server_sockets = []
    for port in server_ports:
        server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        server_socket.connect(('127.0.0.1', port))
        server_sockets.append(server_socket)
    return server_sockets

def main():
    host = "127.0.0.1"  # localhost
    port = 12345  # Port to listen on

    # Create a socket object
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    # Bind the socket to the address and port
    server_socket.bind((host, port))

    # Listen for incoming connections
    server_socket.listen(5)
    print("Server listening on port", port)

    # Accept a connection
    client_socket, client_address = server_socket.accept()
    print(f"Accepted connection from {client_address}")

    # Receive client ports from the client
    client_ports = [int(port) for port in client_socket.recv(1024).decode().split(",")]
    print("Client ports received:", client_ports)

    # Connect to client ports
    client_sockets = connect_to_clients(client_ports)

    # Receive server ports from the client
    server_ports = [int(port) for port in client_socket.recv(1024).decode().split(",")]
    print("Server ports received:", server_ports)

    # Connect to server ports
    server_sockets = connect_to_servers(server_ports)

    # Handle the client in a separate thread
    client_thread = threading.Thread(target=handle_client, args=(client_socket,))
    client_thread.start()

    # Close the server socket
    server_socket.close()

if __name__ == "__main__":
    main()
