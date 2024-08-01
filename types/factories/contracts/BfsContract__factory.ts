/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  BfsContract,
  BfsContractInterface,
} from "../../contracts/BfsContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "adjMatrix",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "source",
        type: "uint256",
      },
    ],
    name: "bfs",
    outputs: [
      {
        internalType: "int256[]",
        name: "",
        type: "int256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "source",
        type: "uint256",
      },
    ],
    name: "calculating",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "distance",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "encrypted_matrix",
    outputs: [
      {
        internalType: "euint8",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lengths",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "query_distance_matrix",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "y",
        type: "uint8",
      },
    ],
    name: "set_alpha",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "def",
        type: "bytes",
      },
      {
        internalType: "uint8",
        name: "rows",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "cols",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "aa",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "bb",
        type: "uint8",
      },
    ],
    name: "set_default",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "v",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "set_value",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "v",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "j",
        type: "uint256",
      },
    ],
    name: "set_value_i",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "u",
        type: "uint8",
      },
    ],
    name: "setrows",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "show_cal",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "show_val",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sum",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "value",
    outputs: [
      {
        internalType: "euint8",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x612713805460ff1916905560646080818152610d206040529060a0610c80803683375050815161003792612716925060200190610049565b50348015610043575f80fd5b506100a6565b828054828255905f5260205f20908101928215610082579160200282015b82811115610082578251825591602001919060010190610067565b5061008e929150610092565b5090565b5b8082111561008e575f8155600101610093565b610f72806100b35f395ff3fe608060405234801561000f575f80fd5b50600436106100fb575f3560e01c806390ff5aed11610093578063bf93054511610063578063bf9305451461022f578063dab1fa1214610242578063def587bf1461024b578063ec1790bd1461025e575f80fd5b806390ff5aed146101b2578063a1dfe497146101dd578063a7a3069b146101f0578063bc7721cf1461021d575f80fd5b8063406024ff116100ce578063406024ff146101575780635531a9aa1461016a578063791f437e14610184578063853255cc146101a4575f80fd5b80630b52135e146100ff5780630b6838891461012557806333c05eac1461013a5780633fa4f2451461014d575b5f80fd5b61011261010d366004610bff565b610271565b6040519081526020015b60405180910390f35b610138610133366004610c70565b610296565b005b610138610148366004610cf0565b61035b565b6101126127115481565b610138610165366004610bff565b6103c8565b6127135460ff165b60405160ff909116815260200161011c565b610197610192366004610bff565b61052b565b60405161011c9190610d38565b612713546101729060ff1681565b6101386101c0366004610d7b565b612713805460ff9092166101000261ff0019909216919091179055565b6101126101eb366004610d94565b610794565b6101386101fe366004610d7b565b612715805460ff909216620100000262ff000019909216919091179055565b6127155462010000900460ff16610172565b61011261023d366004610bff565b6107bd565b61271654610112565b610172610259366004610d94565b6107dd565b61013861026c366004610db4565b610825565b5f612716828154811061028657610286610e01565b905f5260205f2001549050919050565b6102d486868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061089392505050565b612711555f5b8460ff16811015610331575f5b8460ff1681101561032857612711546001836064811061030957610309610e01565b60640201826064811061031e5761031e610e01565b01556001016102e7565b506001016102da565b50612715805460ff9283166101000261ffff19909116929093169190911791909117905550505050565b61039983838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061089392505050565b600182606481106103ac576103ac610e01565b6064020182606481106103c1576103c1610e01565b0155505050565b5f5b6127155462010000900460ff168110156104e157600260015b61271683815481106103f7576103f7610e01565b905f5260205f20015481121561041c57610412826002610e29565b91506001016103e3565b50612715545f9061042f9060ff166108a4565b90505f610448610440846001610e4c565b60ff166108a4565b90505f6104876104816001876064811061046457610464610e01565b60640201876064811061047957610479610e01565b0154856108af565b836108e4565b90505f6104bd82600189606481106104a1576104a1610e01565b6064020188606481106104b6576104b6610e01565b01546108e4565b90506104cc61271454826108af565b612714555050600190930192506103ca915050565b5061271354610504906104fb90610100900460ff166108a4565b612714546108af565b61271481905561051390610912565b612713805460ff191660ff9290921691909117905550565b6127155460609062010000900460ff165f5b61271654811015610571575f19612716828154811061055e5761055e610e01565b5f9182526020909120015560010161053d565b505f612716848154811061058757610587610e01565b905f5260205f2001819055505f8167ffffffffffffffff8111156105ad576105ad610e79565b6040519080825280602002602001820160405280156105d6578160200160208202803683370190505b5090505f808583826105e781610e8d565b9350815181106105f9576105f9610e01565b6020026020010181815250505b80821015610739575f838361061a81610e8d565b94508151811061062c5761062c610e01565b602002602001015190505f5b6127155462010000900460ff168110156107325761068a6106856001846064811061066557610665610e01565b60640201836064811061067a5761067a610e01565b01546127115461091c565b61094a565b80156106b2575061271681815481106106a5576106a5610e01565b905f5260205f2001545f19145b1561072a5761271682815481106106cb576106cb610e01565b905f5260205f20015460016106e09190610ea5565b61271682815481106106f4576106f4610e01565b5f9182526020909120015580858461070b81610e8d565b95508151811061071d5761071d610e01565b6020026020010181815250505b600101610638565b5050610606565b61271680548060200260200160405190810160405280929190818152602001828054801561078457602002820191905f5260205f20905b815481526020019060010190808311610770575b5050505050945050505050919050565b600182606481106107a3575f80fd5b6064020181606481106107b4575f80fd5b01549150829050565b61271281815481106107cd575f80fd5b5f91825260209091200154905081565b5f82815481106107eb575f80fd5b905f5260205f20018181548110610800575f80fd5b905f5260205f209060209182820401919006915091509054906101000a900460ff1681565b61086384848080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061089392505050565b6001836064811061087657610876610e01565b60640201826064811061088b5761088b610e01565b015550505050565b5f61089e825f61095c565b92915050565b5f61089e825f6109ef565b5f826108c1576108be5f6108a4565b92505b816108d2576108cf5f6108a4565b91505b6108dd83835f610a64565b9392505050565b5f826108f6576108f35f6108a4565b92505b81610907576109045f6108a4565b91505b6108dd83835f610afa565b5f61089e82610b4c565b5f8261092e5761092b5f6108a4565b92505b8161093f5761093c5f6108a4565b91505b6108dd83835f610bad565b5f61095482610b4c565b151592915050565b5f80838360f81b604051602001610974929190610eee565b60408051601f1981840301815290829052630964a5d960e31b82529150605d90634b252ec8906109a8908490600401610f1c565b602060405180830381865afa1580156109c3573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109e79190610f4e565b949350505050565b604051631ce2e8d760e31b8152600481018390526001600160f81b031960f883901b1660248201525f90605d9063e71746b890604401602060405180830381865afa158015610a40573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108dd9190610f4e565b5f808215610a775750600160f81b610a7a565b505f5b60405163f953e42760e01b815260048101869052602481018590526001600160f81b031982166044820152605d9063f953e427906064015b602060405180830381865afa158015610acd573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610af19190610f4e565b95945050505050565b5f808215610b0d5750600160f81b610b10565b505f5b60405163816d57d360e01b815260048101869052602481018590526001600160f81b031982166044820152605d9063816d57d390606401610ab2565b6040516301693b9160e61b8152600481018290525f90605d90635a4ee44090602401602060405180830381865afa158015610b89573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061089e9190610f4e565b5f808215610bc05750600160f81b610bc3565b505f5b604051631927108160e01b815260048101869052602481018590526001600160f81b031982166044820152605d90631927108190606401610ab2565b5f60208284031215610c0f575f80fd5b5035919050565b5f8083601f840112610c26575f80fd5b50813567ffffffffffffffff811115610c3d575f80fd5b602083019150836020828501011115610c54575f80fd5b9250929050565b803560ff81168114610c6b575f80fd5b919050565b5f805f805f8060a08789031215610c85575f80fd5b863567ffffffffffffffff811115610c9b575f80fd5b610ca789828a01610c16565b9097509550610cba905060208801610c5b565b9350610cc860408801610c5b565b9250610cd660608801610c5b565b9150610ce460808801610c5b565b90509295509295509295565b5f805f60408486031215610d02575f80fd5b833567ffffffffffffffff811115610d18575f80fd5b610d2486828701610c16565b909790965060209590950135949350505050565b602080825282518282018190525f9190848201906040850190845b81811015610d6f57835183529284019291840191600101610d53565b50909695505050505050565b5f60208284031215610d8b575f80fd5b6108dd82610c5b565b5f8060408385031215610da5575f80fd5b50508035926020909101359150565b5f805f8060608587031215610dc7575f80fd5b843567ffffffffffffffff811115610ddd575f80fd5b610de987828801610c16565b90989097506020870135966040013595509350505050565b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52601160045260245ffd5b60ff8181168382160290811690818114610e4557610e45610e15565b5092915050565b5f60ff831680610e6a57634e487b7160e01b5f52601260045260245ffd5b8060ff84160491505092915050565b634e487b7160e01b5f52604160045260245ffd5b5f60018201610e9e57610e9e610e15565b5060010190565b8082018281125f831280158216821582161715610ec457610ec4610e15565b505092915050565b5f5b83811015610ee6578181015183820152602001610ece565b50505f910152565b5f8351610eff818460208801610ecc565b6001600160f81b0319939093169190920190815260010192915050565b602081525f8251806020840152610f3a816040850160208701610ecc565b601f01601f19169190910160400192915050565b5f60208284031215610f5e575f80fd5b505191905056fea164736f6c6343000816000a";

type BfsContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BfsContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BfsContract__factory extends ContractFactory {
  constructor(...args: BfsContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      BfsContract & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BfsContract__factory {
    return super.connect(runner) as BfsContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BfsContractInterface {
    return new Interface(_abi) as BfsContractInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): BfsContract {
    return new Contract(address, _abi, runner) as unknown as BfsContract;
  }
}
