import { dataSource } from "@graphprotocol/graph-ts"
import {
  Initialized as InitializedEvent,
  Issuanced as IssuancedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  Redemption as RedemptionEvent,
  Unpaused as UnpausedEvent,
} from "../generated/IndexFactoryARBEI/IndexFactoryARBEI"
import {
  ARBEIInitialized,
  ARBEIIssuanced,
  ARBEIOwnershipTransferred,
  ARBEIPaused,
  ARBEIRedemption,
  ARBEIUnpaused,
} from "../generated/schema"

export function handleInitialized(event: InitializedEvent): void {
  let entity = new ARBEIInitialized(
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
  let entity = new ARBEIIssuanced(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
  entity.user = event.params.user
  entity.inputToken = event.params.inputToken
  entity.inputAmount = event.params.inputAmount
  entity.outputAmount = event.params.outputAmount
  entity.price = event.params.price
  entity.time = event.params.time

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new ARBEIOwnershipTransferred(
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
  let entity = new ARBEIPaused(
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
  let entity = new ARBEIRedemption(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
  entity.user = event.params.user
  entity.outputToken = event.params.outputToken
  entity.inputAmount = event.params.inputAmount
  entity.outputAmount = event.params.outputAmount
  entity.price = event.params.price
  entity.time = event.params.time

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new ARBEIUnpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.network = dataSource.network()
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
