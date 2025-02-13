import { dataSource } from "@graphprotocol/graph-ts"
import {
  Initialized as InitializedEvent,
  Issuanced as IssuancedEvent,
  IssuanceCancelled as IssuanceCancelledEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  Redemption as RedemptionEvent,
  RequestIssuance as RequestIssuanceEvent,
  RequestRedemption as RequestRedemptionEvent,
  RedemptionCancelled as RedemptionCancelledEvent,
  RequestCancelIssuance as RequestCancelIssuanceEvent,
  RequestCancelRedemption as RequestCancelRedemptionEvent,
  Unpaused as UnpausedEvent,
} from "../generated/IndexFactoryMAG7/IndexFactoryMAG7"
import {
  MAG7IssuanceCancelled,
  MAG7Initialized,
  MAG7Issuanced,
  MAG7OwnershipTransferred,
  MAG7Paused,
  MAG7Redemption,
  MAG7RequestIssuance,
  MAG7RequestRedemption,
  MAG7Unpaused,
  MAG7RedemptionCancelled,
  MAG7RequestCancelRedemption,
  MAG7RequestCancelIssuance,
} from "../generated/schema"

export function handleInitialized(event: InitializedEvent): void {
  let entity = new MAG7Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIssuanced(event: IssuancedEvent): void {
  let entity = new MAG7Issuanced(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
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

export function handleIssuanceCancelled(event: IssuanceCancelledEvent): void {
  let entity = new MAG7IssuanceCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
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

export function handleRequestCancelIssuance(
  event: RequestCancelIssuanceEvent,
): void {
  let entity = new MAG7RequestCancelIssuance(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
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

export function handleRequestCancelRedemption(
  event: RequestCancelRedemptionEvent,
): void {
  let entity = new MAG7RequestCancelRedemption(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
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

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new MAG7OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new MAG7Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRedemption(event: RedemptionEvent): void {
  let entity = new MAG7Redemption(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
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
  let entity = new MAG7RequestIssuance(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
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
  let entity = new MAG7RequestRedemption(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
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

export function handleRedemptionCancelled(
  event: RedemptionCancelledEvent,
): void {
  let entity = new MAG7RedemptionCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
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

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new MAG7Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
