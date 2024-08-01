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
import type { NonPayableOverrides } from "../../../common";
import type {
  BfsContract,
  BfsContractInterface,
} from "../../../contracts/BfsContract.sol/BfsContract";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startNode",
        type: "uint256",
      },
    ],
    name: "bfs",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
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
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "matrix",
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
] as const;

const _bytecode =
  "0x608060405234801561000f575f80fd5b5060408051610140810182525f60a0808301828152600160c0850181905260e08501819052610100850184905261012085018490529084528451808301865281815260208181018590528187018390526060808301849052608080840187905282880193909352875180860189528481528083018590528089018790528082018790528084018590528789015287518086018952868152808301859052808901879052808201879052808401859052818801528751948501885285855290840185905295830182905294820152808401829052928201929092526100f5919060056100fb565b50610242565b828054828255905f5260205f20908101928215610140579160200282015b828111156101405782516101309083906005610150565b5091602001919060010190610119565b5061014c9291506101ed565b5090565b828054828255905f5260205f2090601f016020900481019282156101e1579160200282015f5b838211156101b357835183826101000a81548160ff021916908360ff16021790555092602001926001016020815f01049283019260010302610176565b80156101df5782816101000a81549060ff02191690556001016020815f010492830192600103026101b3565b505b5061014c929150610209565b8082111561014c575f610200828261021d565b506001016101ed565b5b8082111561014c575f815560010161020a565b5080545f8255601f0160209004905f5260205f209081019061023f9190610209565b50565b6105978061024f5f395ff3fe608060405234801561000f575f80fd5b506004361061003f575f3560e01c8063791f437e14610043578063bf9305451461006c578063d9a38d641461008d575b5f80fd5b6100566100513660046104a3565b6100b2565b60405161006391906104ba565b60405180910390f35b61007f61007a3660046104a3565b610214565b604051908152602001610063565b6100a061009b3660046104fd565b610233565b60405160ff9091168152602001610063565b5f5460609082106101095760405162461bcd60e51b815260206004820152601260248201527f496e76616c6964207374617274206e6f64650000000000000000000000000000604482015260640160405180910390fd5b5f5467ffffffffffffffff8111156101235761012361051d565b60405190808252806020026020018201604052801561014c578160200160208202803683370190505b50805161016191600191602090910190610446565b505f5b5f54811015610195575f196001828154811061018257610182610531565b5f91825260209091200155600101610164565b505f600183815481106101aa576101aa610531565b5f918252602090912001556101be8261027b565b600180548060200260200160405190810160405280929190818152602001828054801561020857602002820191905f5260205f20905b8154815260200190600101908083116101f4575b50505050509050919050565b60018181548110610223575f80fd5b5f91825260209091200154905081565b5f8281548110610241575f80fd5b905f5260205f20018181548110610256575f80fd5b905f5260205f209060209182820401919006915091509054906101000a900460ff1681565b5f805467ffffffffffffffff8111156102965761029661051d565b6040519080825280602002602001820160405280156102bf578160200160208202803683370190505b5090505f808383826102d081610559565b9350815181106102e2576102e2610531565b6020026020010181815250505b80821015610440575f838361030381610559565b94508151811061031557610315610531565b602002602001015190505f5b5f828154811061033357610333610531565b5f91825260209091200154811015610439575f828154811061035757610357610531565b905f5260205f2001818154811061037057610370610531565b905f5260205f2090602091828204019190069054906101000a900460ff1660ff1660011480156103bb57505f19600182815481106103b0576103b0610531565b905f5260205f200154145b1561043157600182815481106103d3576103d3610531565b905f5260205f20015460016103e89190610571565b600182815481106103fb576103fb610531565b5f9182526020909120015580858461041281610559565b95508151811061042457610424610531565b6020026020010181815250505b600101610321565b50506102ef565b50505050565b828054828255905f5260205f2090810192821561047f579160200282015b8281111561047f578251825591602001919060010190610464565b5061048b92915061048f565b5090565b5b8082111561048b575f8155600101610490565b5f602082840312156104b3575f80fd5b5035919050565b602080825282518282018190525f9190848201906040850190845b818110156104f1578351835292840192918401916001016104d5565b50909695505050505050565b5f806040838503121561050e575f80fd5b50508035926020909101359150565b634e487b7160e01b5f52604160045260245ffd5b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52601160045260245ffd5b5f6001820161056a5761056a610545565b5060010190565b8082018082111561058457610584610545565b9291505056fea164736f6c6343000816000a";

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