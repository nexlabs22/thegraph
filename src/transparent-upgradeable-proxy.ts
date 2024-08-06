import { Bytes } from "@graphprotocol/graph-ts";
import {
  AdminChanged as AdminChangedEvent,
  BeaconUpgraded as BeaconUpgradedEvent,
  Upgraded as UpgradedEvent,
  Initialized as InitializedEvent,
  Issuanced as IssuancedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  Redemption as RedemptionEvent,
  RequestIssuance as RequestIssuanceEvent,
  RequestRedemption as RequestRedemptionEvent,
  Unpaused as UnpausedEvent,
} from "../generated/TransparentUpgradeableProxy/TransparentUpgradeableProxy";


import {
  AdminChanged,
  BeaconUpgraded,
  Upgraded,
  Issuanced,
  OwnershipTransferred,
  Paused,
  Redemption,
  RequestIssuance,
  RequestRedemption,
  Unpaused,
} from "../generated/schema";

export function handleAdminChanged(event: AdminChangedEvent): void {
  let entity = new AdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousAdmin = event.params.previousAdmin;
  entity.newAdmin = event.params.newAdmin;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleBeaconUpgraded(event: BeaconUpgradedEvent): void {
  let entity = new BeaconUpgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.beacon = event.params.beacon;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.implementation = event.params.implementation;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.account = event.params.account;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRequestIssuance(event: RequestIssuanceEvent): void {
  let entity = new RequestIssuance(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.nonce = event.params.nonce;
  entity.user = event.params.user;
  entity.inputToken = event.params.inputToken;
  entity.inputAmount = event.params.inputAmount;
  entity.outputAmount = event.params.outputAmount;
  entity.time = event.params.time;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRequestRedemption(event: RequestRedemptionEvent): void {
  let entity = new RequestRedemption(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.nonce = event.params.nonce;
  entity.user = event.params.user;
  entity.outputToken = event.params.outputToken;
  entity.inputAmount = event.params.inputAmount;
  entity.outputAmount = event.params.outputAmount;
  entity.time = event.params.time;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.account = event.params.account;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

