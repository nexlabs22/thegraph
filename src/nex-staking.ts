import {
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RewardTokensSwapped as RewardTokensSwappedEvent,
  Staked as StakedEvent,
  Unstaked as UnstakedEvent,
  Upgraded as UpgradedEvent,
} from "../generated/NexStaking/NexStaking"
import {
  NexStakingInitialized,
  NexStakingOwnershipTransferred,  
  RewardTokensSwapped,
  Staked,
  Unstaked,
  Upgraded,
} from "../generated/schema"

export function handleInitialized(event: InitializedEvent): void {
  let entity = new NexStakingInitialized(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new NexStakingOwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardTokensSwapped(
  event: RewardTokensSwappedEvent,
): void {
  let entity = new RewardTokensSwapped(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.tokenIn = event.params.tokenIn
  entity.tokenOut = event.params.tokenOut
  entity.amountIn = event.params.amountIn
  entity.amountOut = event.params.amountOut
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStaked(event: StakedEvent): void {
  let entity = new Staked(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.user = event.params.user
  entity.tokenAddress = event.params.tokenAddress
  entity.amount = event.params.amount
  entity.totalStakedAmount = event.params.totalStakedAmount
  entity.poolSize = event.params.poolSize
  entity.vault = event.params.vault
  entity.sharesMinted = event.params.sharesMinted
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnstaked(event: UnstakedEvent): void {
  let entity = new Unstaked(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.user = event.params.user
  entity.tokenAddress = event.params.tokenAddress
  entity.amount = event.params.amount
  entity.totalStakedAmount = event.params.totalStakedAmount
  entity.rewardAmount = event.params.rewardAmount
  entity.poolSize = event.params.poolSize
  entity.vault = event.params.vault
  entity.sharesBurned = event.params.sharesBurned
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.implementation = event.params.implementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
