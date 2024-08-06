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

export class AdminChanged extends ethereum.Event {
  get params(): AdminChanged__Params {
    return new AdminChanged__Params(this);
  }
}

export class AdminChanged__Params {
  _event: AdminChanged;

  constructor(event: AdminChanged) {
    this._event = event;
  }

  get previousAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class BeaconUpgraded extends ethereum.Event {
  get params(): BeaconUpgraded__Params {
    return new BeaconUpgraded__Params(this);
  }
}

export class BeaconUpgraded__Params {
  _event: BeaconUpgraded;

  constructor(event: BeaconUpgraded) {
    this._event = event;
  }

  get beacon(): Address {
    return this._event.parameters[0].value.toAddress();
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

export class Issuanced extends ethereum.Event {
  get params(): Issuanced__Params {
    return new Issuanced__Params(this);
  }
}

export class Issuanced__Params {
  _event: Issuanced;

  constructor(event: Issuanced) {
    this._event = event;
  }

  get nonce(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get inputToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get inputAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get outputAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get time(): BigInt {
    return this._event.parameters[5].value.toBigInt();
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

export class Redemption extends ethereum.Event {
  get params(): Redemption__Params {
    return new Redemption__Params(this);
  }
}

export class Redemption__Params {
  _event: Redemption;

  constructor(event: Redemption) {
    this._event = event;
  }

  get nonce(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get outputToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get inputAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get outputAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get time(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class RequestIssuance extends ethereum.Event {
  get params(): RequestIssuance__Params {
    return new RequestIssuance__Params(this);
  }
}

export class RequestIssuance__Params {
  _event: RequestIssuance;

  constructor(event: RequestIssuance) {
    this._event = event;
  }

  get nonce(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get inputToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get inputAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get outputAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get time(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class RequestRedemption extends ethereum.Event {
  get params(): RequestRedemption__Params {
    return new RequestRedemption__Params(this);
  }
}

export class RequestRedemption__Params {
  _event: RequestRedemption;

  constructor(event: RequestRedemption) {
    this._event = event;
  }

  get nonce(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get outputToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get inputAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get outputAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get time(): BigInt {
    return this._event.parameters[5].value.toBigInt();
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

export class ChainlinkCancelled extends ethereum.Event {
  get params(): ChainlinkCancelled__Params {
    return new ChainlinkCancelled__Params(this);
  }
}

export class ChainlinkCancelled__Params {
  _event: ChainlinkCancelled;

  constructor(event: ChainlinkCancelled) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class ChainlinkFulfilled extends ethereum.Event {
  get params(): ChainlinkFulfilled__Params {
    return new ChainlinkFulfilled__Params(this);
  }
}

export class ChainlinkFulfilled__Params {
  _event: ChainlinkFulfilled;

  constructor(event: ChainlinkFulfilled) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class ChainlinkRequested extends ethereum.Event {
  get params(): ChainlinkRequested__Params {
    return new ChainlinkRequested__Params(this);
  }
}

export class ChainlinkRequested__Params {
  _event: ChainlinkRequested;

  constructor(event: ChainlinkRequested) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
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

export class Initialized1 extends ethereum.Event {
  get params(): Initialized1__Params {
    return new Initialized1__Params(this);
  }
}

export class Initialized1__Params {
  _event: Initialized1;

  constructor(event: Initialized1) {
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

export class OwnershipTransferred1 extends ethereum.Event {
  get params(): OwnershipTransferred1__Params {
    return new OwnershipTransferred1__Params(this);
  }
}

export class OwnershipTransferred1__Params {
  _event: OwnershipTransferred1;

  constructor(event: OwnershipTransferred1) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused1 extends ethereum.Event {
  get params(): Paused1__Params {
    return new Paused1__Params(this);
  }
}

export class Paused1__Params {
  _event: Paused1;

  constructor(event: Paused1) {
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

export class Unpaused1 extends ethereum.Event {
  get params(): Unpaused1__Params {
    return new Unpaused1__Params(this);
  }
}

export class Unpaused1__Params {
  _event: Unpaused1;

  constructor(event: Unpaused1) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class TransparentUpgradeableProxy extends ethereum.SmartContract {
  static bind(address: Address): TransparentUpgradeableProxy {
    return new TransparentUpgradeableProxy(
      "TransparentUpgradeableProxy",
      address,
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _logic(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get admin_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}
