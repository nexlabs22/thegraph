import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Initialized,
  OwnershipTransferred,
  RewardTokensSwapped,
  Staked,
  Unstaked,
  Upgraded
} from "../generated/NexStaking/NexStaking"

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

export function createRewardTokensSwappedEvent(
  tokenIn: Address,
  tokenOut: Address,
  amountIn: BigInt,
  amountOut: BigInt,
  user: Address
): RewardTokensSwapped {
  let rewardTokensSwappedEvent = changetype<RewardTokensSwapped>(newMockEvent())

  rewardTokensSwappedEvent.parameters = new Array()

  rewardTokensSwappedEvent.parameters.push(
    new ethereum.EventParam("tokenIn", ethereum.Value.fromAddress(tokenIn))
  )
  rewardTokensSwappedEvent.parameters.push(
    new ethereum.EventParam("tokenOut", ethereum.Value.fromAddress(tokenOut))
  )
  rewardTokensSwappedEvent.parameters.push(
    new ethereum.EventParam(
      "amountIn",
      ethereum.Value.fromUnsignedBigInt(amountIn)
    )
  )
  rewardTokensSwappedEvent.parameters.push(
    new ethereum.EventParam(
      "amountOut",
      ethereum.Value.fromUnsignedBigInt(amountOut)
    )
  )
  rewardTokensSwappedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return rewardTokensSwappedEvent
}

export function createStakedEvent(
  user: Address,
  tokenAddress: Address,
  amount: BigInt,
  totalStakedAmount: BigInt,
  poolSize: BigInt,
  vault: Address,
  sharesMinted: BigInt,
  timestamp: BigInt
): Staked {
  let stakedEvent = changetype<Staked>(newMockEvent())

  stakedEvent.parameters = new Array()

  stakedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam(
      "totalStakedAmount",
      ethereum.Value.fromUnsignedBigInt(totalStakedAmount)
    )
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam(
      "poolSize",
      ethereum.Value.fromUnsignedBigInt(poolSize)
    )
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam("vault", ethereum.Value.fromAddress(vault))
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam(
      "sharesMinted",
      ethereum.Value.fromUnsignedBigInt(sharesMinted)
    )
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return stakedEvent
}

export function createUnstakedEvent(
  user: Address,
  tokenAddress: Address,
  amount: BigInt,
  totalStakedAmount: BigInt,
  rewardAmount: BigInt,
  poolSize: BigInt,
  vault: Address,
  sharesBurned: BigInt,
  timestamp: BigInt
): Unstaked {
  let unstakedEvent = changetype<Unstaked>(newMockEvent())

  unstakedEvent.parameters = new Array()

  unstakedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  unstakedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  unstakedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  unstakedEvent.parameters.push(
    new ethereum.EventParam(
      "totalStakedAmount",
      ethereum.Value.fromUnsignedBigInt(totalStakedAmount)
    )
  )
  unstakedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardAmount",
      ethereum.Value.fromUnsignedBigInt(rewardAmount)
    )
  )
  unstakedEvent.parameters.push(
    new ethereum.EventParam(
      "poolSize",
      ethereum.Value.fromUnsignedBigInt(poolSize)
    )
  )
  unstakedEvent.parameters.push(
    new ethereum.EventParam("vault", ethereum.Value.fromAddress(vault))
  )
  unstakedEvent.parameters.push(
    new ethereum.EventParam(
      "sharesBurned",
      ethereum.Value.fromUnsignedBigInt(sharesBurned)
    )
  )
  unstakedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return unstakedEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}
