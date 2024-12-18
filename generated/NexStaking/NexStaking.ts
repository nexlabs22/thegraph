// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RewardTokensSwapped extends ethereum.Event {
  get params(): RewardTokensSwapped__Params {
    return new RewardTokensSwapped__Params(this);
  }
}

export class RewardTokensSwapped__Params {
  _event: RewardTokensSwapped;

  constructor(event: RewardTokensSwapped) {
    this._event = event;
  }

  get tokenIn(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenOut(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amountIn(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amountOut(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class Staked extends ethereum.Event {
  get params(): Staked__Params {
    return new Staked__Params(this);
  }
}

export class Staked__Params {
  _event: Staked;

  constructor(event: Staked) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get totalStakedAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get poolSize(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get vault(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get sharesMinted(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class Unstaked extends ethereum.Event {
  get params(): Unstaked__Params {
    return new Unstaked__Params(this);
  }
}

export class Unstaked__Params {
  _event: Unstaked;

  constructor(event: Unstaked) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get totalStakedAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get rewardAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get poolSize(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get vault(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get sharesBurned(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }
}

export class Upgraded extends ethereum.Event {
  get params(): Upgraded__Params {
    return new Upgraded__Params(this);
  }
}

export class Upgraded__Params {
  _event: Upgraded;

  constructor(event: Upgraded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class NexStaking__positionsResult {
  value0: Address;
  value1: Address;
  value2: Address;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: Address,
    value1: Address,
    value2: Address,
    value3: BigInt,
    value4: BigInt,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }

  getOwner(): Address {
    return this.value0;
  }

  getStakeToken(): Address {
    return this.value1;
  }

  getVaultToken(): Address {
    return this.value2;
  }

  getStakeAmount(): BigInt {
    return this.value3;
  }

  getStartTime(): BigInt {
    return this.value4;
  }
}

export class NexStaking extends ethereum.SmartContract {
  static bind(address: Address): NexStaking {
    return new NexStaking("NexStaking", address);
  }

  UPGRADE_INTERFACE_VERSION(): string {
    let result = super.call(
      "UPGRADE_INTERFACE_VERSION",
      "UPGRADE_INTERFACE_VERSION():(string)",
      [],
    );

    return result[0].toString();
  }

  try_UPGRADE_INTERFACE_VERSION(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "UPGRADE_INTERFACE_VERSION",
      "UPGRADE_INTERFACE_VERSION():(string)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  erc4626Factory(): Address {
    let result = super.call("erc4626Factory", "erc4626Factory():(address)", []);

    return result[0].toAddress();
  }

  try_erc4626Factory(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "erc4626Factory",
      "erc4626Factory():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  feePercent(): i32 {
    let result = super.call("feePercent", "feePercent():(uint8)", []);

    return result[0].toI32();
  }

  try_feePercent(): ethereum.CallResult<i32> {
    let result = super.tryCall("feePercent", "feePercent():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getPureRewardAmount(
    tokenAddress: Address,
    userAddress: Address,
    amount: BigInt,
  ): BigInt {
    let result = super.call(
      "getPureRewardAmount",
      "getPureRewardAmount(address,address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(tokenAddress),
        ethereum.Value.fromAddress(userAddress),
        ethereum.Value.fromUnsignedBigInt(amount),
      ],
    );

    return result[0].toBigInt();
  }

  try_getPureRewardAmount(
    tokenAddress: Address,
    userAddress: Address,
    amount: BigInt,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPureRewardAmount",
      "getPureRewardAmount(address,address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(tokenAddress),
        ethereum.Value.fromAddress(userAddress),
        ethereum.Value.fromUnsignedBigInt(amount),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getSharesToRedeemAmount(
    tokenAddress: Address,
    userAddress: Address,
    amount: BigInt,
  ): BigInt {
    let result = super.call(
      "getSharesToRedeemAmount",
      "getSharesToRedeemAmount(address,address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(tokenAddress),
        ethereum.Value.fromAddress(userAddress),
        ethereum.Value.fromUnsignedBigInt(amount),
      ],
    );

    return result[0].toBigInt();
  }

  try_getSharesToRedeemAmount(
    tokenAddress: Address,
    userAddress: Address,
    amount: BigInt,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getSharesToRedeemAmount",
      "getSharesToRedeemAmount(address,address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(tokenAddress),
        ethereum.Value.fromAddress(userAddress),
        ethereum.Value.fromUnsignedBigInt(amount),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getUserShares(user: Address, tokenAddress: Address): BigInt {
    let result = super.call(
      "getUserShares",
      "getUserShares(address,address):(uint256)",
      [
        ethereum.Value.fromAddress(user),
        ethereum.Value.fromAddress(tokenAddress),
      ],
    );

    return result[0].toBigInt();
  }

  try_getUserShares(
    user: Address,
    tokenAddress: Address,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getUserShares",
      "getUserShares(address,address):(uint256)",
      [
        ethereum.Value.fromAddress(user),
        ethereum.Value.fromAddress(tokenAddress),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  numberOfStakersByTokenAddress(param0: Address): BigInt {
    let result = super.call(
      "numberOfStakersByTokenAddress",
      "numberOfStakersByTokenAddress(address):(uint256)",
      [ethereum.Value.fromAddress(param0)],
    );

    return result[0].toBigInt();
  }

  try_numberOfStakersByTokenAddress(
    param0: Address,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "numberOfStakersByTokenAddress",
      "numberOfStakersByTokenAddress(address):(uint256)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  poolTokensAddresses(param0: BigInt): Address {
    let result = super.call(
      "poolTokensAddresses",
      "poolTokensAddresses(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return result[0].toAddress();
  }

  try_poolTokensAddresses(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "poolTokensAddresses",
      "poolTokensAddresses(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  positions(param0: Address, param1: Address): NexStaking__positionsResult {
    let result = super.call(
      "positions",
      "positions(address,address):(address,address,address,uint256,uint256)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)],
    );

    return new NexStaking__positionsResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt(),
    );
  }

  try_positions(
    param0: Address,
    param1: Address,
  ): ethereum.CallResult<NexStaking__positionsResult> {
    let result = super.tryCall(
      "positions",
      "positions(address,address):(address,address,address,uint256,uint256)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new NexStaking__positionsResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt(),
      ),
    );
  }

  proxiableUUID(): Bytes {
    let result = super.call("proxiableUUID", "proxiableUUID():(bytes32)", []);

    return result[0].toBytes();
  }

  try_proxiableUUID(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "proxiableUUID",
      "proxiableUUID():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  rewardTokensAddresses(param0: BigInt): Address {
    let result = super.call(
      "rewardTokensAddresses",
      "rewardTokensAddresses(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return result[0].toAddress();
  }

  try_rewardTokensAddresses(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "rewardTokensAddresses",
      "rewardTokensAddresses(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  routerV3(): Address {
    let result = super.call("routerV3", "routerV3():(address)", []);

    return result[0].toAddress();
  }

  try_routerV3(): ethereum.CallResult<Address> {
    let result = super.tryCall("routerV3", "routerV3():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportedRewardTokens(param0: Address): boolean {
    let result = super.call(
      "supportedRewardTokens",
      "supportedRewardTokens(address):(bool)",
      [ethereum.Value.fromAddress(param0)],
    );

    return result[0].toBoolean();
  }

  try_supportedRewardTokens(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportedRewardTokens",
      "supportedRewardTokens(address):(bool)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  supportedTokens(param0: Address): boolean {
    let result = super.call(
      "supportedTokens",
      "supportedTokens(address):(bool)",
      [ethereum.Value.fromAddress(param0)],
    );

    return result[0].toBoolean();
  }

  try_supportedTokens(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportedTokens",
      "supportedTokens(address):(bool)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  tokenAddressToVaultAddress(param0: Address): Address {
    let result = super.call(
      "tokenAddressToVaultAddress",
      "tokenAddressToVaultAddress(address):(address)",
      [ethereum.Value.fromAddress(param0)],
    );

    return result[0].toAddress();
  }

  try_tokenAddressToVaultAddress(
    param0: Address,
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "tokenAddressToVaultAddress",
      "tokenAddressToVaultAddress(address):(address)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokenSwapVersion(param0: Address): i32 {
    let result = super.call(
      "tokenSwapVersion",
      "tokenSwapVersion(address):(uint8)",
      [ethereum.Value.fromAddress(param0)],
    );

    return result[0].toI32();
  }

  try_tokenSwapVersion(param0: Address): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "tokenSwapVersion",
      "tokenSwapVersion(address):(uint8)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  weth(): Address {
    let result = super.call("weth", "weth():(address)", []);

    return result[0].toAddress();
  }

  try_weth(): ethereum.CallResult<Address> {
    let result = super.tryCall("weth", "weth():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _indexTokensAddresses(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _rewardTokensAddresses(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _swapVersions(): Array<i32> {
    return this._call.inputValues[2].value.toI32Array();
  }

  get _erc4626Factory(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _uniswapV3Router(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _weth(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _feePercent(): i32 {
    return this._call.inputValues[6].value.toI32();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetFeePercentCall extends ethereum.Call {
  get inputs(): SetFeePercentCall__Inputs {
    return new SetFeePercentCall__Inputs(this);
  }

  get outputs(): SetFeePercentCall__Outputs {
    return new SetFeePercentCall__Outputs(this);
  }
}

export class SetFeePercentCall__Inputs {
  _call: SetFeePercentCall;

  constructor(call: SetFeePercentCall) {
    this._call = call;
  }

  get newFeePercent(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class SetFeePercentCall__Outputs {
  _call: SetFeePercentCall;

  constructor(call: SetFeePercentCall) {
    this._call = call;
  }
}

export class StakeCall extends ethereum.Call {
  get inputs(): StakeCall__Inputs {
    return new StakeCall__Inputs(this);
  }

  get outputs(): StakeCall__Outputs {
    return new StakeCall__Outputs(this);
  }
}

export class StakeCall__Inputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }

  get tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class StakeCall__Outputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnstakeCall extends ethereum.Call {
  get inputs(): UnstakeCall__Inputs {
    return new UnstakeCall__Inputs(this);
  }

  get outputs(): UnstakeCall__Outputs {
    return new UnstakeCall__Outputs(this);
  }
}

export class UnstakeCall__Inputs {
  _call: UnstakeCall;

  constructor(call: UnstakeCall) {
    this._call = call;
  }

  get tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get rewardTokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get unstakeAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class UnstakeCall__Outputs {
  _call: UnstakeCall;

  constructor(call: UnstakeCall) {
    this._call = call;
  }
}

export class UpgradeToAndCallCall extends ethereum.Call {
  get inputs(): UpgradeToAndCallCall__Inputs {
    return new UpgradeToAndCallCall__Inputs(this);
  }

  get outputs(): UpgradeToAndCallCall__Outputs {
    return new UpgradeToAndCallCall__Outputs(this);
  }
}

export class UpgradeToAndCallCall__Inputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpgradeToAndCallCall__Outputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }
}
