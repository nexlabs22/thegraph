import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Initialized,
  Issuanced,
  MessageSent,
  OwnershipTransferred,
  Redemption,
  RequestIssuance,
  RequestRedemption
} from "../generated/IndexFactoryCR5/IndexFactoryCR5"

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
  messageId: Bytes,
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
    new ethereum.EventParam(
      "messageId",
      ethereum.Value.fromFixedBytes(messageId)
    )
  )
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

export function createMessageSentEvent(messageId: Bytes): MessageSent {
  let messageSentEvent = changetype<MessageSent>(newMockEvent())

  messageSentEvent.parameters = new Array()

  messageSentEvent.parameters.push(
    new ethereum.EventParam(
      "messageId",
      ethereum.Value.fromFixedBytes(messageId)
    )
  )

  return messageSentEvent
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

export function createRedemptionEvent(
  messageId: Bytes,
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
    new ethereum.EventParam(
      "messageId",
      ethereum.Value.fromFixedBytes(messageId)
    )
  )
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
  messageId: Bytes,
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
    new ethereum.EventParam(
      "messageId",
      ethereum.Value.fromFixedBytes(messageId)
    )
  )
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
  messageId: Bytes,
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
    new ethereum.EventParam(
      "messageId",
      ethereum.Value.fromFixedBytes(messageId)
    )
  )
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