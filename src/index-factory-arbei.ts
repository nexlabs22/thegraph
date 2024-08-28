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
  Unpaused as UnpausedEvent,
} from "../generated/IndexFactoryARBEI/IndexFactoryARBEI"
import {
  ChainlinkCancelled,
  ChainlinkFulfilled,
  ChainlinkRequested,
  FeeRateSet,
  FeeReceiverSet,
  Initialized,
  ARBEIIssuanced,
  MethodologistSet,
  MethodologySet,
  MintFeeToReceiver,
  MinterSet,
  OwnershipTransferred,
  Paused,
  ARBEIRedemption,
  SupplyCeilingSet,
  ToggledRestricted,
  Unpaused,
} from "../generated/schema"

export function handleChainlinkCancelled(event: ChainlinkCancelledEvent): void {
  let entity = new ChainlinkCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.IndexFactory_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChainlinkFulfilled(event: ChainlinkFulfilledEvent): void {
  let entity = new ChainlinkFulfilled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.IndexFactory_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChainlinkRequested(event: ChainlinkRequestedEvent): void {
  let entity = new ChainlinkRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.IndexFactory_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeRateSet(event: FeeRateSetEvent): void {
  let entity = new FeeRateSet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.feeRatePerDayScaled = event.params.feeRatePerDayScaled

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeReceiverSet(event: FeeReceiverSetEvent): void {
  let entity = new FeeReceiverSet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.feeReceiver = event.params.feeReceiver

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
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
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.methodologist = event.params.methodologist

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMethodologySet(event: MethodologySetEvent): void {
  let entity = new MethodologySet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.methodology = event.params.methodology

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMintFeeToReceiver(event: MintFeeToReceiverEvent): void {
  let entity = new MintFeeToReceiver(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
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
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.minter = event.params.minter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
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
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.supplyCeiling = event.params.supplyCeiling

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleToggledRestricted(event: ToggledRestrictedEvent): void {
  let entity = new ToggledRestricted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.account = event.params.account
  entity.isRestricted = event.params.isRestricted

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
