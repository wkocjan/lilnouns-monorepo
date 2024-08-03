/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace INounsSeeder {
  export type SeedStruct = {
    background: PromiseOrValue<BigNumberish>;
    body: PromiseOrValue<BigNumberish>;
    accessory: PromiseOrValue<BigNumberish>;
    head: PromiseOrValue<BigNumberish>;
    glasses: PromiseOrValue<BigNumberish>;
  };

  export type SeedStructOutput = [number, number, number, number, number] & {
    background: number;
    body: number;
    accessory: number;
    head: number;
    glasses: number;
  };
}

export interface LilVRGDAInterface extends utils.Interface {
  functions: {
    "buyNow(uint256,uint256)": FunctionFragment;
    "fetchNextNoun()": FunctionFragment;
    "fetchNoun(uint256)": FunctionFragment;
    "getCurrentVRGDAPrice()": FunctionFragment;
    "getSeederBlockNumber()": FunctionFragment;
    "getTargetSaleTime(int256)": FunctionFragment;
    "getVRGDAPrice(int256,uint256)": FunctionFragment;
    "initialize(uint256,uint256,uint256,uint256,address,address,address)": FunctionFragment;
    "lilNounderRewardNouns()": FunctionFragment;
    "nextNounId()": FunctionFragment;
    "nextNounIdForCaller()": FunctionFragment;
    "nounsDAORewardNouns()": FunctionFragment;
    "nounsDescriptor()": FunctionFragment;
    "nounsSeeder()": FunctionFragment;
    "nounsSoldAtAuction()": FunctionFragment;
    "nounsToken()": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "poolSize()": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "reservePrice()": FunctionFragment;
    "seederBlockNumber()": FunctionFragment;
    "setPoolSize(uint256)": FunctionFragment;
    "setReservePrice(uint256)": FunctionFragment;
    "setUpdateInterval(uint256)": FunctionFragment;
    "startTime()": FunctionFragment;
    "targetPrice()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "updateInterval()": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
    "usedBlockNumbers(uint256)": FunctionFragment;
    "wethAddress()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "buyNow"
      | "fetchNextNoun"
      | "fetchNoun"
      | "getCurrentVRGDAPrice"
      | "getSeederBlockNumber"
      | "getTargetSaleTime"
      | "getVRGDAPrice"
      | "initialize"
      | "lilNounderRewardNouns"
      | "nextNounId"
      | "nextNounIdForCaller"
      | "nounsDAORewardNouns"
      | "nounsDescriptor"
      | "nounsSeeder"
      | "nounsSoldAtAuction"
      | "nounsToken"
      | "owner"
      | "pause"
      | "paused"
      | "poolSize"
      | "proxiableUUID"
      | "renounceOwnership"
      | "reservePrice"
      | "seederBlockNumber"
      | "setPoolSize"
      | "setReservePrice"
      | "setUpdateInterval"
      | "startTime"
      | "targetPrice"
      | "transferOwnership"
      | "unpause"
      | "updateInterval"
      | "upgradeTo"
      | "upgradeToAndCall"
      | "usedBlockNumbers"
      | "wethAddress"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "buyNow",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "fetchNextNoun",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fetchNoun",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentVRGDAPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSeederBlockNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTargetSaleTime",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getVRGDAPrice",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "lilNounderRewardNouns",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextNounId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextNounIdForCaller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nounsDAORewardNouns",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nounsDescriptor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nounsSeeder",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nounsSoldAtAuction",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nounsToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "poolSize", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reservePrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "seederBlockNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPoolSize",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setReservePrice",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setUpdateInterval",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "startTime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "targetPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateInterval",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "usedBlockNumbers",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "wethAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "buyNow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fetchNextNoun",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fetchNoun", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentVRGDAPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSeederBlockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTargetSaleTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVRGDAPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lilNounderRewardNouns",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nextNounId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextNounIdForCaller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nounsDAORewardNouns",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nounsDescriptor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nounsSeeder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nounsSoldAtAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nounsToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolSize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reservePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "seederBlockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPoolSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReservePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUpdateInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startTime", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "targetPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "usedBlockNumbers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wethAddress",
    data: BytesLike
  ): Result;

  events: {
    "AuctionReservePriceUpdated(uint256)": EventFragment;
    "AuctionSettled(uint256,address,uint256)": EventFragment;
    "AuctionUpdateIntervalUpdated(uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "PoolSizeUpdated(uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuctionReservePriceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionSettled"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "AuctionUpdateIntervalUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolSizeUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface AuctionReservePriceUpdatedEventObject {
  reservePrice: BigNumber;
}
export type AuctionReservePriceUpdatedEvent = TypedEvent<
  [BigNumber],
  AuctionReservePriceUpdatedEventObject
>;

export type AuctionReservePriceUpdatedEventFilter =
  TypedEventFilter<AuctionReservePriceUpdatedEvent>;

export interface AuctionSettledEventObject {
  nounId: BigNumber;
  winner: string;
  amount: BigNumber;
}
export type AuctionSettledEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  AuctionSettledEventObject
>;

export type AuctionSettledEventFilter = TypedEventFilter<AuctionSettledEvent>;

export interface AuctionUpdateIntervalUpdatedEventObject {
  interval: BigNumber;
}
export type AuctionUpdateIntervalUpdatedEvent = TypedEvent<
  [BigNumber],
  AuctionUpdateIntervalUpdatedEventObject
>;

export type AuctionUpdateIntervalUpdatedEventFilter =
  TypedEventFilter<AuctionUpdateIntervalUpdatedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface PoolSizeUpdatedEventObject {
  poolSize: BigNumber;
}
export type PoolSizeUpdatedEvent = TypedEvent<
  [BigNumber],
  PoolSizeUpdatedEventObject
>;

export type PoolSizeUpdatedEventFilter = TypedEventFilter<PoolSizeUpdatedEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface UpgradedEventObject {
  impl: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface LilVRGDA extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LilVRGDAInterface;

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
    buyNow(
      expectedBlockNumber: PromiseOrValue<BigNumberish>,
      expectedNounId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fetchNextNoun(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, INounsSeeder.SeedStructOutput, string, BigNumber, string] & {
        nounId: BigNumber;
        seed: INounsSeeder.SeedStructOutput;
        svg: string;
        price: BigNumber;
        hash: string;
      }
    >;

    fetchNoun(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, INounsSeeder.SeedStructOutput, string, BigNumber, string] & {
        nounId: BigNumber;
        seed: INounsSeeder.SeedStructOutput;
        svg: string;
        price: BigNumber;
        hash: string;
      }
    >;

    getCurrentVRGDAPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    getSeederBlockNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTargetSaleTime(
      sold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getVRGDAPrice(
      timeSinceStart: PromiseOrValue<BigNumberish>,
      sold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initialize(
      _reservePrice: PromiseOrValue<BigNumberish>,
      _nextNounId: PromiseOrValue<BigNumberish>,
      _poolSize: PromiseOrValue<BigNumberish>,
      _nounsSoldAtAuction: PromiseOrValue<BigNumberish>,
      _nounsTokenAddress: PromiseOrValue<string>,
      _nounsSeederAddress: PromiseOrValue<string>,
      _nounsDescriptorAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    lilNounderRewardNouns(overrides?: CallOverrides): Promise<[BigNumber]>;

    nextNounId(overrides?: CallOverrides): Promise<[BigNumber]>;

    nextNounIdForCaller(overrides?: CallOverrides): Promise<[BigNumber]>;

    nounsDAORewardNouns(overrides?: CallOverrides): Promise<[BigNumber]>;

    nounsDescriptor(overrides?: CallOverrides): Promise<[string]>;

    nounsSeeder(overrides?: CallOverrides): Promise<[string]>;

    nounsSoldAtAuction(overrides?: CallOverrides): Promise<[BigNumber]>;

    nounsToken(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    poolSize(overrides?: CallOverrides): Promise<[BigNumber]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    reservePrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    seederBlockNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

    setPoolSize(
      _poolSize: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setReservePrice(
      _reservePrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setUpdateInterval(
      _updateInterval: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    startTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    targetPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateInterval(overrides?: CallOverrides): Promise<[BigNumber]>;

    upgradeTo(
      _newImpl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      _newImpl: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    usedBlockNumbers(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { used: boolean }>;

    wethAddress(overrides?: CallOverrides): Promise<[string]>;
  };

  buyNow(
    expectedBlockNumber: PromiseOrValue<BigNumberish>,
    expectedNounId: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fetchNextNoun(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, INounsSeeder.SeedStructOutput, string, BigNumber, string] & {
      nounId: BigNumber;
      seed: INounsSeeder.SeedStructOutput;
      svg: string;
      price: BigNumber;
      hash: string;
    }
  >;

  fetchNoun(
    blockNumber: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, INounsSeeder.SeedStructOutput, string, BigNumber, string] & {
      nounId: BigNumber;
      seed: INounsSeeder.SeedStructOutput;
      svg: string;
      price: BigNumber;
      hash: string;
    }
  >;

  getCurrentVRGDAPrice(overrides?: CallOverrides): Promise<BigNumber>;

  getSeederBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

  getTargetSaleTime(
    sold: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getVRGDAPrice(
    timeSinceStart: PromiseOrValue<BigNumberish>,
    sold: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initialize(
    _reservePrice: PromiseOrValue<BigNumberish>,
    _nextNounId: PromiseOrValue<BigNumberish>,
    _poolSize: PromiseOrValue<BigNumberish>,
    _nounsSoldAtAuction: PromiseOrValue<BigNumberish>,
    _nounsTokenAddress: PromiseOrValue<string>,
    _nounsSeederAddress: PromiseOrValue<string>,
    _nounsDescriptorAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  lilNounderRewardNouns(overrides?: CallOverrides): Promise<BigNumber>;

  nextNounId(overrides?: CallOverrides): Promise<BigNumber>;

  nextNounIdForCaller(overrides?: CallOverrides): Promise<BigNumber>;

  nounsDAORewardNouns(overrides?: CallOverrides): Promise<BigNumber>;

  nounsDescriptor(overrides?: CallOverrides): Promise<string>;

  nounsSeeder(overrides?: CallOverrides): Promise<string>;

  nounsSoldAtAuction(overrides?: CallOverrides): Promise<BigNumber>;

  nounsToken(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  poolSize(overrides?: CallOverrides): Promise<BigNumber>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  reservePrice(overrides?: CallOverrides): Promise<BigNumber>;

  seederBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

  setPoolSize(
    _poolSize: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setReservePrice(
    _reservePrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setUpdateInterval(
    _updateInterval: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  startTime(overrides?: CallOverrides): Promise<BigNumber>;

  targetPrice(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateInterval(overrides?: CallOverrides): Promise<BigNumber>;

  upgradeTo(
    _newImpl: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    _newImpl: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  usedBlockNumbers(
    blockNumber: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  wethAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    buyNow(
      expectedBlockNumber: PromiseOrValue<BigNumberish>,
      expectedNounId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    fetchNextNoun(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, INounsSeeder.SeedStructOutput, string, BigNumber, string] & {
        nounId: BigNumber;
        seed: INounsSeeder.SeedStructOutput;
        svg: string;
        price: BigNumber;
        hash: string;
      }
    >;

    fetchNoun(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, INounsSeeder.SeedStructOutput, string, BigNumber, string] & {
        nounId: BigNumber;
        seed: INounsSeeder.SeedStructOutput;
        svg: string;
        price: BigNumber;
        hash: string;
      }
    >;

    getCurrentVRGDAPrice(overrides?: CallOverrides): Promise<BigNumber>;

    getSeederBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    getTargetSaleTime(
      sold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVRGDAPrice(
      timeSinceStart: PromiseOrValue<BigNumberish>,
      sold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _reservePrice: PromiseOrValue<BigNumberish>,
      _nextNounId: PromiseOrValue<BigNumberish>,
      _poolSize: PromiseOrValue<BigNumberish>,
      _nounsSoldAtAuction: PromiseOrValue<BigNumberish>,
      _nounsTokenAddress: PromiseOrValue<string>,
      _nounsSeederAddress: PromiseOrValue<string>,
      _nounsDescriptorAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    lilNounderRewardNouns(overrides?: CallOverrides): Promise<BigNumber>;

    nextNounId(overrides?: CallOverrides): Promise<BigNumber>;

    nextNounIdForCaller(overrides?: CallOverrides): Promise<BigNumber>;

    nounsDAORewardNouns(overrides?: CallOverrides): Promise<BigNumber>;

    nounsDescriptor(overrides?: CallOverrides): Promise<string>;

    nounsSeeder(overrides?: CallOverrides): Promise<string>;

    nounsSoldAtAuction(overrides?: CallOverrides): Promise<BigNumber>;

    nounsToken(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    poolSize(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    reservePrice(overrides?: CallOverrides): Promise<BigNumber>;

    seederBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    setPoolSize(
      _poolSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setReservePrice(
      _reservePrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setUpdateInterval(
      _updateInterval: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    startTime(overrides?: CallOverrides): Promise<BigNumber>;

    targetPrice(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    updateInterval(overrides?: CallOverrides): Promise<BigNumber>;

    upgradeTo(
      _newImpl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      _newImpl: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    usedBlockNumbers(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    wethAddress(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AuctionReservePriceUpdated(uint256)"(
      reservePrice?: null
    ): AuctionReservePriceUpdatedEventFilter;
    AuctionReservePriceUpdated(
      reservePrice?: null
    ): AuctionReservePriceUpdatedEventFilter;

    "AuctionSettled(uint256,address,uint256)"(
      nounId?: PromiseOrValue<BigNumberish> | null,
      winner?: null,
      amount?: null
    ): AuctionSettledEventFilter;
    AuctionSettled(
      nounId?: PromiseOrValue<BigNumberish> | null,
      winner?: null,
      amount?: null
    ): AuctionSettledEventFilter;

    "AuctionUpdateIntervalUpdated(uint256)"(
      interval?: null
    ): AuctionUpdateIntervalUpdatedEventFilter;
    AuctionUpdateIntervalUpdated(
      interval?: null
    ): AuctionUpdateIntervalUpdatedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "PoolSizeUpdated(uint256)"(poolSize?: null): PoolSizeUpdatedEventFilter;
    PoolSizeUpdated(poolSize?: null): PoolSizeUpdatedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    "Upgraded(address)"(impl?: null): UpgradedEventFilter;
    Upgraded(impl?: null): UpgradedEventFilter;
  };

  estimateGas: {
    buyNow(
      expectedBlockNumber: PromiseOrValue<BigNumberish>,
      expectedNounId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fetchNextNoun(overrides?: CallOverrides): Promise<BigNumber>;

    fetchNoun(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentVRGDAPrice(overrides?: CallOverrides): Promise<BigNumber>;

    getSeederBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    getTargetSaleTime(
      sold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVRGDAPrice(
      timeSinceStart: PromiseOrValue<BigNumberish>,
      sold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _reservePrice: PromiseOrValue<BigNumberish>,
      _nextNounId: PromiseOrValue<BigNumberish>,
      _poolSize: PromiseOrValue<BigNumberish>,
      _nounsSoldAtAuction: PromiseOrValue<BigNumberish>,
      _nounsTokenAddress: PromiseOrValue<string>,
      _nounsSeederAddress: PromiseOrValue<string>,
      _nounsDescriptorAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    lilNounderRewardNouns(overrides?: CallOverrides): Promise<BigNumber>;

    nextNounId(overrides?: CallOverrides): Promise<BigNumber>;

    nextNounIdForCaller(overrides?: CallOverrides): Promise<BigNumber>;

    nounsDAORewardNouns(overrides?: CallOverrides): Promise<BigNumber>;

    nounsDescriptor(overrides?: CallOverrides): Promise<BigNumber>;

    nounsSeeder(overrides?: CallOverrides): Promise<BigNumber>;

    nounsSoldAtAuction(overrides?: CallOverrides): Promise<BigNumber>;

    nounsToken(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    poolSize(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    reservePrice(overrides?: CallOverrides): Promise<BigNumber>;

    seederBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    setPoolSize(
      _poolSize: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setReservePrice(
      _reservePrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setUpdateInterval(
      _updateInterval: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    startTime(overrides?: CallOverrides): Promise<BigNumber>;

    targetPrice(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateInterval(overrides?: CallOverrides): Promise<BigNumber>;

    upgradeTo(
      _newImpl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      _newImpl: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    usedBlockNumbers(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wethAddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    buyNow(
      expectedBlockNumber: PromiseOrValue<BigNumberish>,
      expectedNounId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fetchNextNoun(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fetchNoun(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentVRGDAPrice(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSeederBlockNumber(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTargetSaleTime(
      sold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVRGDAPrice(
      timeSinceStart: PromiseOrValue<BigNumberish>,
      sold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _reservePrice: PromiseOrValue<BigNumberish>,
      _nextNounId: PromiseOrValue<BigNumberish>,
      _poolSize: PromiseOrValue<BigNumberish>,
      _nounsSoldAtAuction: PromiseOrValue<BigNumberish>,
      _nounsTokenAddress: PromiseOrValue<string>,
      _nounsSeederAddress: PromiseOrValue<string>,
      _nounsDescriptorAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    lilNounderRewardNouns(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nextNounId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextNounIdForCaller(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nounsDAORewardNouns(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nounsDescriptor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nounsSeeder(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nounsSoldAtAuction(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nounsToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    reservePrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    seederBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setPoolSize(
      _poolSize: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setReservePrice(
      _reservePrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setUpdateInterval(
      _updateInterval: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    startTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    targetPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateInterval(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    upgradeTo(
      _newImpl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      _newImpl: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    usedBlockNumbers(
      blockNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    wethAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}