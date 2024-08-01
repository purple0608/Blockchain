/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface BfsContractInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "adjMatrix"
      | "bfs"
      | "calculating"
      | "distance"
      | "encrypted_matrix"
      | "lengths"
      | "query_distance_matrix"
      | "set_alpha"
      | "set_default"
      | "set_value"
      | "set_value_i"
      | "setrows"
      | "show_cal"
      | "show_val"
      | "sum"
      | "value"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "adjMatrix",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "bfs", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "calculating",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "distance",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "encrypted_matrix",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "lengths", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "query_distance_matrix",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "set_alpha",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "set_default",
    values: [BytesLike, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "set_value",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "set_value_i",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setrows",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "show_cal", values?: undefined): string;
  encodeFunctionData(functionFragment: "show_val", values?: undefined): string;
  encodeFunctionData(functionFragment: "sum", values?: undefined): string;
  encodeFunctionData(functionFragment: "value", values?: undefined): string;

  decodeFunctionResult(functionFragment: "adjMatrix", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bfs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculating",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "distance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "encrypted_matrix",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lengths", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "query_distance_matrix",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "set_alpha", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "set_default",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "set_value", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "set_value_i",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setrows", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "show_cal", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "show_val", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sum", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "value", data: BytesLike): Result;
}

export interface BfsContract extends BaseContract {
  connect(runner?: ContractRunner | null): BfsContract;
  waitForDeployment(): Promise<this>;

  interface: BfsContractInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  adjMatrix: TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  bfs: TypedContractMethod<[source: BigNumberish], [bigint[]], "nonpayable">;

  calculating: TypedContractMethod<
    [source: BigNumberish],
    [void],
    "nonpayable"
  >;

  distance: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  encrypted_matrix: TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  lengths: TypedContractMethod<[], [bigint], "view">;

  query_distance_matrix: TypedContractMethod<
    [i: BigNumberish],
    [bigint],
    "view"
  >;

  set_alpha: TypedContractMethod<[y: BigNumberish], [void], "nonpayable">;

  set_default: TypedContractMethod<
    [
      def: BytesLike,
      rows: BigNumberish,
      cols: BigNumberish,
      aa: BigNumberish,
      bb: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  set_value: TypedContractMethod<
    [v: BytesLike, i: BigNumberish],
    [void],
    "nonpayable"
  >;

  set_value_i: TypedContractMethod<
    [v: BytesLike, i: BigNumberish, j: BigNumberish],
    [void],
    "nonpayable"
  >;

  setrows: TypedContractMethod<[u: BigNumberish], [void], "nonpayable">;

  show_cal: TypedContractMethod<[], [bigint], "view">;

  show_val: TypedContractMethod<[], [bigint], "view">;

  sum: TypedContractMethod<[], [bigint], "view">;

  value: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "adjMatrix"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "bfs"
  ): TypedContractMethod<[source: BigNumberish], [bigint[]], "nonpayable">;
  getFunction(
    nameOrSignature: "calculating"
  ): TypedContractMethod<[source: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "distance"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "encrypted_matrix"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "lengths"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "query_distance_matrix"
  ): TypedContractMethod<[i: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "set_alpha"
  ): TypedContractMethod<[y: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "set_default"
  ): TypedContractMethod<
    [
      def: BytesLike,
      rows: BigNumberish,
      cols: BigNumberish,
      aa: BigNumberish,
      bb: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "set_value"
  ): TypedContractMethod<[v: BytesLike, i: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "set_value_i"
  ): TypedContractMethod<
    [v: BytesLike, i: BigNumberish, j: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setrows"
  ): TypedContractMethod<[u: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "show_cal"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "show_val"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "sum"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "value"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}