#!/bin/bash

# Deploy the contract first and capture the contract address
contract_address=$(pnpm hardhat deploy )
echo "Contract deployed at address: $contract_address"

# Pass the contract address as an environment variable for all test files
export CONTRACT_ADDRESS=$contract_address

# Define an array with the paths to your test files in the desired order
test_files=(
    "test/final.ts"
   
    # Add more test files as needed
)

# Iterate over the array and run each test file
for file in "${test_files[@]}"
do
    echo "Running test: $file"
    pnpm test "$file"
done
