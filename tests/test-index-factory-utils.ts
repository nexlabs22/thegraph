import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Initialized,
  Issuanced,
  OwnershipTransferred,
  Paused,
  Redemption,
  RequestIssuance,
  RequestRedemption,
  Unpaused
} from "../generated/IndexFactoryMAG7/IndexFactoryMAG7"

export function createInitializedEvent(version: BigInt): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(version)
    )
  )

  return initializedEvent
}

export function createIssuancedEvent(
  nonce: BigInt,
  user: Address,
  inputToken: Address,
  inputAmount: BigInt,
  outputAmount: BigInt,
  time: BigInt
): Issuanced {
  let issuancedEvent = changetype<Issuanced>(newMockEvent())

  issuancedEvent.parameters = new Array()

  issuancedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
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
  nonce: BigInt,
  user: Address,
  outputToken: Address,
  inputAmount: BigInt,
  outputAmount: BigInt,
  time: BigInt
): Redemption {
  let redemptionEvent = changetype<Redemption>(newMockEvent())

  redemptionEvent.parameters = new Array()

  redemptionEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
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

export function createRequestIssuanceEvent(
  nonce: BigInt,
  user: Address,
  inputToken: Address,
  inputAmount: BigInt,
  outputAmount: BigInt,
  time: BigInt
): RequestIssuance {
  let requestIssuanceEvent = changetype<RequestIssuance>(newMockEvent())

  requestIssuanceEvent.parameters = new Array()

  requestIssuanceEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  requestIssuanceEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  requestIssuanceEvent.parameters.push(
    new ethereum.EventParam(
      "inputToken",
      ethereum.Value.fromAddress(inputToken)
    )
  )
  requestIssuanceEvent.parameters.push(
    new ethereum.EventParam(
      "inputAmount",
      ethereum.Value.fromUnsignedBigInt(inputAmount)
    )
  )
  requestIssuanceEvent.parameters.push(
    new ethereum.EventParam(
      "outputAmount",
      ethereum.Value.fromUnsignedBigInt(outputAmount)
    )
  )
  requestIssuanceEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return requestIssuanceEvent
}

export function createRequestRedemptionEvent(
  nonce: BigInt,
  user: Address,
  outputToken: Address,
  inputAmount: BigInt,
  outputAmount: BigInt,
  time: BigInt
): RequestRedemption {
  let requestRedemptionEvent = changetype<RequestRedemption>(newMockEvent())

  requestRedemptionEvent.parameters = new Array()

  requestRedemptionEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  requestRedemptionEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  requestRedemptionEvent.parameters.push(
    new ethereum.EventParam(
      "outputToken",
      ethereum.Value.fromAddress(outputToken)
    )
  )
  requestRedemptionEvent.parameters.push(
    new ethereum.EventParam(
      "inputAmount",
      ethereum.Value.fromUnsignedBigInt(inputAmount)
    )
  )
  requestRedemptionEvent.parameters.push(
    new ethereum.EventParam(
      "outputAmount",
      ethereum.Value.fromUnsignedBigInt(outputAmount)
    )
  )
  requestRedemptionEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return requestRedemptionEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
