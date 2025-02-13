import { dataSource } from "@graphprotocol/graph-ts"
import {
  ChainlinkCancelled as ChainlinkCancelledEvent,
  ChainlinkFulfilled as ChainlinkFulfilledEvent,
  ChainlinkRequested as ChainlinkRequestedEvent,
  FeeRateSet as FeeRateSetEvent,
  FeeReceiverSet as FeeReceiverSetEvent,
  Initialized as InitializedEvent,
  Issuanced as IssuancedEvent,
  MethodologistSet as MethodologistSetEvent,
  MethodologySet as MethodologySetEvent,
  MintFeeToReceiver as MintFeeToReceiverEvent,
  MinterSet as MinterSetEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  Redemption as RedemptionEvent,
  SupplyCeilingSet as SupplyCeilingSetEvent,
  ToggledRestricted as ToggledRestrictedEvent,
  Unpaused as UnpausedEvent
} from "../generated/IndexFactoryAnfi/IndexFactoryAnfi"
import {
  ChainlinkCancelled,
  ChainlinkFulfilled,
  ChainlinkRequested,
  FeeRateSet,
  FeeReceiverSet,
  ANFIInitialized,
  ANFIIssuanced,
  MethodologistSet,
  MethodologySet,
  MintFeeToReceiver,
  MinterSet,
  ANFIOwnershipTransferred,
  ANFIPaused,
  ANFIRedemption,
  SupplyCeilingSet,
  ToggledRestricted,
  ANFIUnpaused
} from "../generated/schema"

export function handleChainlinkCancelled(event: ChainlinkCancelledEvent): void {
  let entity = new ChainlinkCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.network = dataSource.network()
  entity.IndexFactory_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChainlinkFulfilled(event: ChainlinkFulfilledEvent): void {
  let entity = new ChainlinkFulfilled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.network = dataSource.network()
  entity.IndexFactory_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChainlinkRequested(event: ChainlinkRequestedEvent): void {
  let entity = new ChainlinkRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.network = dataSource.network()
  entity.IndexFactory_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeRateSet(event: FeeRateSetEvent): void {
  let entity = new FeeRateSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.network = dataSource.network()
  entity.feeRatePerDayScaled = event.params.feeRatePerDayScaled

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeReceiverSet(event: FeeReceiverSetEvent): void {
  let entity = new FeeReceiverSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.network = dataSource.network()
  entity.feeReceiver = event.params.feeReceiver

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new ANFIInitialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.network = dataSource.network()
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIssuanced(event: IssuancedEvent): void {
  let entity = new ANFIIssuanced(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.network = dataSource.network()
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

export function handleMethodologistSet(event: MethodologistSetEvent): void {
  let entity = new MethodologistSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.network = dataSource.network()
  entity.methodologist = event.params.methodologist

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMethodologySet(event: MethodologySetEvent): void {
  let entity = new MethodologySet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.network = dataSource.network()
  entity.methodology = event.params.methodology

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMintFeeToReceiver(event: MintFeeToReceiverEvent): void {
  let entity = new MintFeeToReceiver(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.network = dataSource.network()
  entity.feeReceiver = event.params.feeReceiver
  entity.timestamp = event.params.timestamp
  entity.totalSupply = event.params.totalSupply
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMinterSet(event: MinterSetEvent): void {
  let entity = new MinterSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.network = dataSource.network()
  entity.minter = event.params.minter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new ANFIOwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
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
  let entity = new ANFIPaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.network = dataSource.network()
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRedemption(event: RedemptionEvent): void {
  let entity = new ANFIRedemption(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.network = dataSource.network()
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

export function handleSupplyCeilingSet(event: SupplyCeilingSetEvent): void {
  let entity = new SupplyCeilingSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.network = dataSource.network()
  entity.supplyCeiling = event.params.supplyCeiling

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleToggledRestricted(event: ToggledRestrictedEvent): void {
  let entity = new ToggledRestricted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.network = dataSource.network()
  entity.account = event.params.account
  entity.isRestricted = event.params.isRestricted

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new ANFIUnpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.network = dataSource.network()
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
