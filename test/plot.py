import matplotlib.pyplot as plt

# Generate data points
input_size = []  # Number of vertices (V)
num_edges = []   # Number of edges (E)
time_taken = []  # Time taken
infection_factor = []  # Infection factor

# Define range for V and E
min_vertices = 2
max_vertices = 20
max_edges = 100

# Generate data points
for v in range(min_vertices, max_vertices + 1):
    for e in range(v - 1, min(v * (v - 1) // 2 + 1, max_edges + 1)):  # Ensure E <= V * (V - 1) / 2
        input_size.append(v)
        num_edges.append(e)
        
        # Calculate time taken and infection factor based on your algorithm
        time_taken.append(v + e)  # Placeholder calculation
        infection_factor.append(v * e)  # Placeholder calculation

# Plotting time vs input size
plt.figure(figsize=(10, 5))
plt.plot(input_size, time_taken, marker='o', color='blue', label='Time vs Input Size')
plt.xlabel('Input Size (Number of Vertices)')
plt.ylabel('Time Taken (seconds)')
plt.title('Time Complexity: Time vs Input Size')
plt.grid(True)
plt.legend()
plt.show()

# Plotting input size vs infection factor
plt.figure(figsize=(10, 5))
plt.plot(input_size, infection_factor, marker='o', color='red', label='Input Size vs Infection Factor')
plt.xlabel('Input Size (Number of Vertices)')
plt.ylabel('Infection Factor')
plt.title('Time Complexity: Input Size vs Infection Factor')
plt.grid(True)
plt.legend()
plt.show()
