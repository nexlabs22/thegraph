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

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class FeeRateSet extends ethereum.Event {
  get params(): FeeRateSet__Params {
    return new FeeRateSet__Params(this);
  }
}

export class FeeRateSet__Params {
  _event: FeeRateSet;

  constructor(event: FeeRateSet) {
    this._event = event;
  }

  get feeRatePerDayScaled(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class FeeReceiverSet extends ethereum.Event {
  get params(): FeeReceiverSet__Params {
    return new FeeReceiverSet__Params(this);
  }
}

export class FeeReceiverSet__Params {
  _event: FeeReceiverSet;

  constructor(event: FeeReceiverSet) {
    this._event = event;
  }

  get feeReceiver(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

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

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class MethodologistSet extends ethereum.Event {
  get params(): MethodologistSet__Params {
    return new MethodologistSet__Params(this);
  }
}

export class MethodologistSet__Params {
  _event: MethodologistSet;

  constructor(event: MethodologistSet) {
    this._event = event;
  }

  get methodologist(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class MethodologySet extends ethereum.Event {
  get params(): MethodologySet__Params {
    return new MethodologySet__Params(this);
  }
}

export class MethodologySet__Params {
  _event: MethodologySet;

  constructor(event: MethodologySet) {
    this._event = event;
  }

  get methodology(): string {
    return this._event.parameters[0].value.toString();
  }
}

export class MintFeeToReceiver extends ethereum.Event {
  get params(): MintFeeToReceiver__Params {
    return new MintFeeToReceiver__Params(this);
  }
}

export class MintFeeToReceiver__Params {
  _event: MintFeeToReceiver;

  constructor(event: MintFeeToReceiver) {
    this._event = event;
  }

  get feeReceiver(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get timestamp(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get totalSupply(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class MinterRemoved extends ethereum.Event {
  get params(): MinterRemoved__Params {
    return new MinterRemoved__Params(this);
  }
}

export class MinterRemoved__Params {
  _event: MinterRemoved;

  constructor(event: MinterRemoved) {
    this._event = event;
  }

  get minter(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class MinterSet extends ethereum.Event {
  get params(): MinterSet__Params {
    return new MinterSet__Params(this);
  }
}

export class MinterSet__Params {
  _event: MinterSet;

  constructor(event: MinterSet) {
    this._event = event;
  }

  get minter(): Address {
    return this._event.parameters[0].value.toAddress();
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

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SupplyCeilingSet extends ethereum.Event {
  get params(): SupplyCeilingSet__Params {
    return new SupplyCeilingSet__Params(this);
  }
}

export class SupplyCeilingSet__Params {
  _event: SupplyCeilingSet;

  constructor(event: SupplyCeilingSet) {
    this._event = event;
  }

  get supplyCeiling(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ToggledRestricted extends ethereum.Event {
  get params(): ToggledRestricted__Params {
    return new ToggledRestricted__Params(this);
  }
}

export class ToggledRestricted__Params {
  _event: ToggledRestricted;

  constructor(event: ToggledRestricted) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isRestricted(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class IndexTokenCRYPTO5 extends ethereum.SmartContract {
  static bind(address: Address): IndexTokenCRYPTO5 {
    return new IndexTokenCRYPTO5("IndexTokenCRYPTO5", address);
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)],
    );

    return result[0].toBigInt();
  }

  try_allowance(owner: Address, spender: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approve(spender: Address, amount: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount),
    ]);

    return result[0].toBoolean();
  }

  try_approve(spender: Address, amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account),
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  decreaseAllowance(spender: Address, subtractedValue: BigInt): boolean {
    let result = super.call(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue),
      ],
    );

    return result[0].toBoolean();
  }

  try_decreaseAllowance(
    spender: Address,
    subtractedValue: BigInt,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  fee(): BigInt {
    let result = super.call("fee", "fee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_fee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("fee", "fee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  feeRatePerDayScaled(): BigInt {
    let result = super.call(
      "feeRatePerDayScaled",
      "feeRatePerDayScaled():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_feeRatePerDayScaled(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "feeRatePerDayScaled",
      "feeRatePerDayScaled():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  feeReceiver(): Address {
    let result = super.call("feeReceiver", "feeReceiver():(address)", []);

    return result[0].toAddress();
  }

  try_feeReceiver(): ethereum.CallResult<Address> {
    let result = super.tryCall("feeReceiver", "feeReceiver():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  feeTimestamp(): BigInt {
    let result = super.call("feeTimestamp", "feeTimestamp():(uint256)", []);

    return result[0].toBigInt();
  }

  try_feeTimestamp(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("feeTimestamp", "feeTimestamp():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  increaseAllowance(spender: Address, addedValue: BigInt): boolean {
    let result = super.call(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue),
      ],
    );

    return result[0].toBoolean();
  }

  try_increaseAllowance(
    spender: Address,
    addedValue: BigInt,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isMinter(param0: Address): boolean {
    let result = super.call("isMinter", "isMinter(address):(bool)", [
      ethereum.Value.fromAddress(param0),
    ]);

    return result[0].toBoolean();
  }

  try_isMinter(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isMinter", "isMinter(address):(bool)", [
      ethereum.Value.fromAddress(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isRestricted(param0: Address): boolean {
    let result = super.call("isRestricted", "isRestricted(address):(bool)", [
      ethereum.Value.fromAddress(param0),
    ]);

    return result[0].toBoolean();
  }

  try_isRestricted(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isRestricted", "isRestricted(address):(bool)", [
      ethereum.Value.fromAddress(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  methodologist(): Address {
    let result = super.call("methodologist", "methodologist():(address)", []);

    return result[0].toAddress();
  }

  try_methodologist(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "methodologist",
      "methodologist():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  methodology(): string {
    let result = super.call("methodology", "methodology():(string)", []);

    return result[0].toString();
  }

  try_methodology(): ethereum.CallResult<string> {
    let result = super.tryCall("methodology", "methodology():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
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

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  proposedOwner(): Address {
    let result = super.call("proposedOwner", "proposedOwner():(address)", []);

    return result[0].toAddress();
  }

  try_proposedOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "proposedOwner",
      "proposedOwner():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supplyCeiling(): BigInt {
    let result = super.call("supplyCeiling", "supplyCeiling():(uint256)", []);

    return result[0].toBigInt();
  }

  try_supplyCeiling(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "supplyCeiling",
      "supplyCeiling():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(to: Address, amount: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(to),
      ethereum.Value.fromUnsignedBigInt(amount),
    ]);

    return result[0].toBoolean();
  }

  try_transfer(to: Address, amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(to),
      ethereum.Value.fromUnsignedBigInt(amount),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(from: Address, to: Address, amount: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(amount),
      ],
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    from: Address,
    to: Address,
    amount: BigInt,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(amount),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }
}

export class DecreaseAllowanceCall extends ethereum.Call {
  get inputs(): DecreaseAllowanceCall__Inputs {
    return new DecreaseAllowanceCall__Inputs(this);
  }

  get outputs(): DecreaseAllowanceCall__Outputs {
    return new DecreaseAllowanceCall__Outputs(this);
  }
}

export class DecreaseAllowanceCall__Inputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get subtractedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DecreaseAllowanceCall__Outputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class IncreaseAllowanceCall extends ethereum.Call {
  get inputs(): IncreaseAllowanceCall__Inputs {
    return new IncreaseAllowanceCall__Inputs(this);
  }

  get outputs(): IncreaseAllowanceCall__Outputs {
    return new IncreaseAllowanceCall__Outputs(this);
  }
}

export class IncreaseAllowanceCall__Inputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get addedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class IncreaseAllowanceCall__Outputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
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

  get tokenName(): string {
    return this._call.inputValues[0].value.toString();
  }

  get tokenSymbol(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _feeRatePerDayScaled(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _feeReceiver(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _supplyCeiling(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class MintToFeeReceiverCall extends ethereum.Call {
  get inputs(): MintToFeeReceiverCall__Inputs {
    return new MintToFeeReceiverCall__Inputs(this);
  }

  get outputs(): MintToFeeReceiverCall__Outputs {
    return new MintToFeeReceiverCall__Outputs(this);
  }
}

export class MintToFeeReceiverCall__Inputs {
  _call: MintToFeeReceiverCall;

  constructor(call: MintToFeeReceiverCall) {
    this._call = call;
  }
}

export class MintToFeeReceiverCall__Outputs {
  _call: MintToFeeReceiverCall;

  constructor(call: MintToFeeReceiverCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class ProposeOwnerCall extends ethereum.Call {
  get inputs(): ProposeOwnerCall__Inputs {
    return new ProposeOwnerCall__Inputs(this);
  }

  get outputs(): ProposeOwnerCall__Outputs {
    return new ProposeOwnerCall__Outputs(this);
  }
}

export class ProposeOwnerCall__Inputs {
  _call: ProposeOwnerCall;

  constructor(call: ProposeOwnerCall) {
    this._call = call;
  }

  get _proposedOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ProposeOwnerCall__Outputs {
  _call: ProposeOwnerCall;

  constructor(call: ProposeOwnerCall) {
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

export class SetFeeRateCall extends ethereum.Call {
  get inputs(): SetFeeRateCall__Inputs {
    return new SetFeeRateCall__Inputs(this);
  }

  get outputs(): SetFeeRateCall__Outputs {
    return new SetFeeRateCall__Outputs(this);
  }
}

export class SetFeeRateCall__Inputs {
  _call: SetFeeRateCall;

  constructor(call: SetFeeRateCall) {
    this._call = call;
  }

  get _feeRatePerDayScaled(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetFeeRateCall__Outputs {
  _call: SetFeeRateCall;

  constructor(call: SetFeeRateCall) {
    this._call = call;
  }
}

export class SetFeeReceiverCall extends ethereum.Call {
  get inputs(): SetFeeReceiverCall__Inputs {
    return new SetFeeReceiverCall__Inputs(this);
  }

  get outputs(): SetFeeReceiverCall__Outputs {
    return new SetFeeReceiverCall__Outputs(this);
  }
}

export class SetFeeReceiverCall__Inputs {
  _call: SetFeeReceiverCall;

  constructor(call: SetFeeReceiverCall) {
    this._call = call;
  }

  get _feeReceiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFeeReceiverCall__Outputs {
  _call: SetFeeReceiverCall;

  constructor(call: SetFeeReceiverCall) {
    this._call = call;
  }
}

export class SetMethodologistCall extends ethereum.Call {
  get inputs(): SetMethodologistCall__Inputs {
    return new SetMethodologistCall__Inputs(this);
  }

  get outputs(): SetMethodologistCall__Outputs {
    return new SetMethodologistCall__Outputs(this);
  }
}

export class SetMethodologistCall__Inputs {
  _call: SetMethodologistCall;

  constructor(call: SetMethodologistCall) {
    this._call = call;
  }

  get _methodologist(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetMethodologistCall__Outputs {
  _call: SetMethodologistCall;

  constructor(call: SetMethodologistCall) {
    this._call = call;
  }
}

export class SetMethodologyCall extends ethereum.Call {
  get inputs(): SetMethodologyCall__Inputs {
    return new SetMethodologyCall__Inputs(this);
  }

  get outputs(): SetMethodologyCall__Outputs {
    return new SetMethodologyCall__Outputs(this);
  }
}

export class SetMethodologyCall__Inputs {
  _call: SetMethodologyCall;

  constructor(call: SetMethodologyCall) {
    this._call = call;
  }

  get _methodology(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetMethodologyCall__Outputs {
  _call: SetMethodologyCall;

  constructor(call: SetMethodologyCall) {
    this._call = call;
  }
}

export class SetMinterCall extends ethereum.Call {
  get inputs(): SetMinterCall__Inputs {
    return new SetMinterCall__Inputs(this);
  }

  get outputs(): SetMinterCall__Outputs {
    return new SetMinterCall__Outputs(this);
  }
}

export class SetMinterCall__Inputs {
  _call: SetMinterCall;

  constructor(call: SetMinterCall) {
    this._call = call;
  }

  get _minter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _enabled(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetMinterCall__Outputs {
  _call: SetMinterCall;

  constructor(call: SetMinterCall) {
    this._call = call;
  }
}

export class SetSupplyCeilingCall extends ethereum.Call {
  get inputs(): SetSupplyCeilingCall__Inputs {
    return new SetSupplyCeilingCall__Inputs(this);
  }

  get outputs(): SetSupplyCeilingCall__Outputs {
    return new SetSupplyCeilingCall__Outputs(this);
  }
}

export class SetSupplyCeilingCall__Inputs {
  _call: SetSupplyCeilingCall;

  constructor(call: SetSupplyCeilingCall) {
    this._call = call;
  }

  get _supplyCeiling(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetSupplyCeilingCall__Outputs {
  _call: SetSupplyCeilingCall;

  constructor(call: SetSupplyCeilingCall) {
    this._call = call;
  }
}

export class ToggleRestrictionCall extends ethereum.Call {
  get inputs(): ToggleRestrictionCall__Inputs {
    return new ToggleRestrictionCall__Inputs(this);
  }

  get outputs(): ToggleRestrictionCall__Outputs {
    return new ToggleRestrictionCall__Outputs(this);
  }
}

export class ToggleRestrictionCall__Inputs {
  _call: ToggleRestrictionCall;

  constructor(call: ToggleRestrictionCall) {
    this._call = call;
  }

  get who(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ToggleRestrictionCall__Outputs {
  _call: ToggleRestrictionCall;

  constructor(call: ToggleRestrictionCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
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

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class WithdrawEtherCall extends ethereum.Call {
  get inputs(): WithdrawEtherCall__Inputs {
    return new WithdrawEtherCall__Inputs(this);
  }

  get outputs(): WithdrawEtherCall__Outputs {
    return new WithdrawEtherCall__Outputs(this);
  }
}

export class WithdrawEtherCall__Inputs {
  _call: WithdrawEtherCall;

  constructor(call: WithdrawEtherCall) {
    this._call = call;
  }
}

export class WithdrawEtherCall__Outputs {
  _call: WithdrawEtherCall;

  constructor(call: WithdrawEtherCall) {
    this._call = call;
  }
}
