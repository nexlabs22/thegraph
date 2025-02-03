import {
  Initialized as InitializedEvent,
  Issuanced as IssuancedEvent,
  MessageSent as MessageSentEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Redemption as RedemptionEvent,
  RequestIssuance as RequestIssuanceEvent,
  RequestRedemption as RequestRedemptionEvent,
} from "../generated/IndexFactoryCRYPTO5/IndexFactoryCRYPTO5"
import {
  CRYPTO5Initialized,
  CRYPTO5Issuanced,
  MessageSent,
  CRYPTO5OwnershipTransferred,
  CRYPTO5Redemption,
  CRYPTO5RequestIssuance,
  CRYPTO5RequestRedemption,
} from "../generated/schema"

export function handleInitialized(event: InitializedEvent): void {
  let entity = new CRYPTO5Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIssuanced(event: IssuancedEvent): void {
  let entity = new CRYPTO5Issuanced(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.messageId = event.params.messageId
  entity.nonce = event.params.nonce
  entity.user = event.params.user
  entity.inputToken = event.params.inputToken
  entity.inputAmount = event.params.inputAmount
  entity.outputAmount = event.params.outputAmount
  entity.time = event.params.time

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMessageSent(event: MessageSentEvent): void {
  let entity = new MessageSent(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.messageId = event.params.messageId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new CRYPTO5OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRedemption(event: RedemptionEvent): void {
  let entity = new CRYPTO5Redemption(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.messageId = event.params.messageId
  entity.nonce = event.params.nonce
  entity.user = event.params.user
  entity.outputToken = event.params.outputToken
  entity.inputAmount = event.params.inputAmount
  entity.outputAmount = event.params.outputAmount
  entity.time = event.params.time

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRequestIssuance(event: RequestIssuanceEvent): void {
  let entity = new CRYPTO5RequestIssuance(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.messageId = event.params.messageId
  entity.nonce = event.params.nonce
  entity.user = event.params.user
  entity.inputToken = event.params.inputToken
  entity.inputAmount = event.params.inputAmount
  entity.outputAmount = event.params.outputAmount
  entity.time = event.params.time

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRequestRedemption(event: RequestRedemptionEvent): void {
  let entity = new CRYPTO5RequestRedemption(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.messageId = event.params.messageId
  entity.nonce = event.params.nonce
  entity.user = event.params.user
  entity.outputToken = event.params.outputToken
  entity.inputAmount = event.params.inputAmount
  entity.outputAmount = event.params.outputAmount
  entity.time = event.params.time

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
