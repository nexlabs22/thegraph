import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  ChainlinkCancelled,
  ChainlinkFulfilled,
  ChainlinkRequested,
  FeeRateSet,
  FeeReceiverSet,
  Initialized,
  Issuanced,
  MethodologistSet,
  MethodologySet,
  MintFeeToReceiver,
  MinterSet,
  OwnershipTransferred,
  Paused,
  Redemption,
  SupplyCeilingSet,
  ToggledRestricted,
  Unpaused
} from "../generated/IndexFactoryARBEI/IndexFactoryARBEI"

export function createChainlinkCancelledEvent(id: Bytes): ChainlinkCancelled {
  let chainlinkCancelledEvent = changetype<ChainlinkCancelled>(newMockEvent())

  chainlinkCancelledEvent.parameters = new Array()

  chainlinkCancelledEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )

  return chainlinkCancelledEvent
}

export function createChainlinkFulfilledEvent(id: Bytes): ChainlinkFulfilled {
  let chainlinkFulfilledEvent = changetype<ChainlinkFulfilled>(newMockEvent())

  chainlinkFulfilledEvent.parameters = new Array()

  chainlinkFulfilledEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )

  return chainlinkFulfilledEvent
}

export function createChainlinkRequestedEvent(id: Bytes): ChainlinkRequested {
  let chainlinkRequestedEvent = changetype<ChainlinkRequested>(newMockEvent())

  chainlinkRequestedEvent.parameters = new Array()

  chainlinkRequestedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )

  return chainlinkRequestedEvent
}

export function createFeeRateSetEvent(feeRatePerDayScaled: BigInt): FeeRateSet {
  let feeRateSetEvent = changetype<FeeRateSet>(newMockEvent())

  feeRateSetEvent.parameters = new Array()

  feeRateSetEvent.parameters.push(
    new ethereum.EventParam(
      "feeRatePerDayScaled",
      ethereum.Value.fromUnsignedBigInt(feeRatePerDayScaled)
    )
  )

  return feeRateSetEvent
}

export function createFeeReceiverSetEvent(
  feeReceiver: Address
): FeeReceiverSet {
  let feeReceiverSetEvent = changetype<FeeReceiverSet>(newMockEvent())

  feeReceiverSetEvent.parameters = new Array()

  feeReceiverSetEvent.parameters.push(
    new ethereum.EventParam(
      "feeReceiver",
      ethereum.Value.fromAddress(feeReceiver)
    )
  )

  return feeReceiverSetEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createIssuancedEvent(
  user: Address,
  inputToken: Address,
  inputAmount: BigInt,
  outputAmount: BigInt,
  time: BigInt
): Issuanced {
  let issuancedEvent = changetype<Issuanced>(newMockEvent())

  issuancedEvent.parameters = new Array()

  issuancedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  issuancedEvent.parameters.push(
    new ethereum.EventParam(
      "inputToken",
      ethereum.Value.fromAddress(inputToken)
    )
  )
  issuancedEvent.parameters.push(
    new ethereum.EventParam(
      "inputAmount",
      ethereum.Value.fromUnsignedBigInt(inputAmount)
    )
  )
  issuancedEvent.parameters.push(
    new ethereum.EventParam(
      "outputAmount",
      ethereum.Value.fromUnsignedBigInt(outputAmount)
    )
  )
  issuancedEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return issuancedEvent
}

export function createMethodologistSetEvent(
  methodologist: Address
): MethodologistSet {
  let methodologistSetEvent = changetype<MethodologistSet>(newMockEvent())

  methodologistSetEvent.parameters = new Array()

  methodologistSetEvent.parameters.push(
    new ethereum.EventParam(
      "methodologist",
      ethereum.Value.fromAddress(methodologist)
    )
  )

  return methodologistSetEvent
}

export function createMethodologySetEvent(methodology: string): MethodologySet {
  let methodologySetEvent = changetype<MethodologySet>(newMockEvent())

  methodologySetEvent.parameters = new Array()

  methodologySetEvent.parameters.push(
    new ethereum.EventParam(
      "methodology",
      ethereum.Value.fromString(methodology)
    )
  )

  return methodologySetEvent
}

export function createMintFeeToReceiverEvent(
  feeReceiver: Address,
  timestamp: BigInt,
  totalSupply: BigInt,
  amount: BigInt
): MintFeeToReceiver {
  let mintFeeToReceiverEvent = changetype<MintFeeToReceiver>(newMockEvent())

  mintFeeToReceiverEvent.parameters = new Array()

  mintFeeToReceiverEvent.parameters.push(
    new ethereum.EventParam(
      "feeReceiver",
      ethereum.Value.fromAddress(feeReceiver)
    )
  )
  mintFeeToReceiverEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  mintFeeToReceiverEvent.parameters.push(
    new ethereum.EventParam(
      "totalSupply",
      ethereum.Value.fromUnsignedBigInt(totalSupply)
    )
  )
  mintFeeToReceiverEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return mintFeeToReceiverEvent
}

export function createMinterSetEvent(minter: Address): MinterSet {
  let minterSetEvent = changetype<MinterSet>(newMockEvent())

  minterSetEvent.parameters = new Array()

  minterSetEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )

  return minterSetEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createRedemptionEvent(
  user: Address,
  outputToken: Address,
  inputAmount: BigInt,
  outputAmount: BigInt,
  time: BigInt
): Redemption {
  let redemptionEvent = changetype<Redemption>(newMockEvent())

  redemptionEvent.parameters = new Array()

  redemptionEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  redemptionEvent.parameters.push(
    new ethereum.EventParam(
      "outputToken",
      ethereum.Value.fromAddress(outputToken)
    )
  )
  redemptionEvent.parameters.push(
    new ethereum.EventParam(
      "inputAmount",
      ethereum.Value.fromUnsignedBigInt(inputAmount)
    )
  )
  redemptionEvent.parameters.push(
    new ethereum.EventParam(
      "outputAmount",
      ethereum.Value.fromUnsignedBigInt(outputAmount)
    )
  )
  redemptionEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return redemptionEvent
}

export function createSupplyCeilingSetEvent(
  supplyCeiling: BigInt
): SupplyCeilingSet {
  let supplyCeilingSetEvent = changetype<SupplyCeilingSet>(newMockEvent())

  supplyCeilingSetEvent.parameters = new Array()

  supplyCeilingSetEvent.parameters.push(
    new ethereum.EventParam(
      "supplyCeiling",
      ethereum.Value.fromUnsignedBigInt(supplyCeiling)
    )
  )

  return supplyCeilingSetEvent
}

export function createToggledRestrictedEvent(
  account: Address,
  isRestricted: boolean
): ToggledRestricted {
  let toggledRestrictedEvent = changetype<ToggledRestricted>(newMockEvent())

  toggledRestrictedEvent.parameters = new Array()

  toggledRestrictedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  toggledRestrictedEvent.parameters.push(
    new ethereum.EventParam(
      "isRestricted",
      ethereum.Value.fromBoolean(isRestricted)
    )
  )

  return toggledRestrictedEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
