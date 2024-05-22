/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface LinearVRGDAInterface extends utils.Interface {
  functions: {
    "getTargetSaleTime(int256)": FunctionFragment;
    "getVRGDAPrice(int256,uint256)": FunctionFragment;
    "targetPrice()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getTargetSaleTime"
      | "getVRGDAPrice"
      | "targetPrice"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getTargetSaleTime",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getVRGDAPrice",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "targetPrice",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getTargetSaleTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVRGDAPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "targetPrice",
    data: BytesLike
  ): Result;

  events: {};
}

export interface LinearVRGDA extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LinearVRGDAInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getTargetSaleTime(
      sold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getVRGDAPrice(
      timeSinceStart: PromiseOrValue<BigNumberish>,
      sold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    targetPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  getTargetSaleTime(
    sold: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getVRGDAPrice(
    timeSinceStart: PromiseOrValue<BigNumberish>,
    sold: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  targetPrice(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getTargetSaleTime(
      sold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVRGDAPrice(
      timeSinceStart: PromiseOrValue<BigNumberish>,
      sold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    targetPrice(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getTargetSaleTime(
      sold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVRGDAPrice(
      timeSinceStart: PromiseOrValue<BigNumberish>,
      sold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    targetPrice(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getTargetSaleTime(
      sold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVRGDAPrice(
      timeSinceStart: PromiseOrValue<BigNumberish>,
      sold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    targetPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
