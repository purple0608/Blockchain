// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "fhevm/lib/TFHE.sol";


//okay here you have already done the encryption portion so that's alright
//now you got to do the second step of the algorithm 
//for this you need to take the values (encrypted values from the user and store them in your matrix)
//so you will get the value from the user encrypted value and i and you got to make that value the encrypted value
//and then return the value to the user

contract BfsContract {
    uint8[][] public adjMatrix;
    euint8 [100][100] public encrypted_matrix;
    euint8 public value;
    int[] public distance;
    uint8 public sum=0;
    uint8 alpha;
    euint8 temp;
    uint8 a;
    uint8 b;

    uint8 r;
    

    function set_default (bytes calldata  def,uint8 rows,uint8 cols,uint8 aa, uint8 bb) public{
         value=TFHE.asEuint8(def);
        for (uint i = 0; i < rows; i++) {
            for (uint j = 0; j < cols; j++) {
                encrypted_matrix[i][j] = value;
            }
        }
        a=aa;
        b=bb;
       
    
    }
    function set_alpha (uint8 y) public{
       
       alpha=y;
    
    }
    function setrows (uint8 u) public{
       
       r=u;
    
    }


    function set_value (bytes calldata v,uint i) public{
       encrypted_matrix[i][i]=TFHE.asEuint8(v);
    }

     function set_value_i (bytes calldata v,uint i,uint j) public{
       encrypted_matrix[i][j]=TFHE.asEuint8(v);
    }
   


    
    int[]  distances = new int[](100);

    function lengths() public view  returns(uint){
        return(distances.length);

    }
    function bfs(uint source) public   returns(int [] memory )   {
        uint numNodes =r;
        
        for (uint i = 0; i < distances.length; i++) {
            distances[i] = -1; // Initialize distances to -1 (unreachable)
        }

        distances[source] = 0; // Distance from source to itself is 0
        uint[] memory queue = new uint[](numNodes);
        uint front = 0;
        uint rear = 0;

        queue[rear++] = source;

        while (front < rear) {
            uint currentNode = queue[front++];

            for (uint neighbor = 0; neighbor < r; neighbor++) {
                if (TFHE.decrypt(TFHE.ne(encrypted_matrix[currentNode][neighbor],value)) && distances[neighbor] == -1) {
                    distances[neighbor] = (distances[currentNode]) + 1;
                    queue[rear++] = neighbor;
                }
            }
        }
        return(distances);
    }


   function calculating(uint source) public   {
    for (uint j = 0; j < r; j++) {
        // int r=distances[j];
        uint8 s = 2;
        for(int i=1;i<distances[j];i++){
            s=s*2;
        }
        
    //    sum+=alpha+((encrypted_matrix[j][j]-a)/s)*encrypted_matrix[source][j];
    euint8 ad=TFHE.asEuint8(a);
    euint8 d=TFHE.asEuint8(1/s);
    
    euint8 t1=TFHE.mul(TFHE.add(encrypted_matrix[j][j],ad),d);
    euint8 t2=TFHE.mul(t1,encrypted_matrix[source][j]);
    temp=TFHE.add(temp,t2);
    
    } 
    temp=TFHE.add(TFHE.asEuint8(alpha),temp);
    sum=TFHE.decrypt(temp);
}

    function show_cal() public view returns(uint8){
        return(sum);
    } 
    function show_val() public view returns(uint8){
        return(r);
    } 

    function query_distance_matrix(uint  i) public view returns(int){
        return(distances[i]);
    }



}
