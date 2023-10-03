/*
*Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
*/

let { AaveOracleContract, AvalancheAaveOracleContract, PolygonAaveOracleContract, ArbitrumAaveOracleContract, OptimismAaveOracleContract,
      PoolAddressesProviderRegistryContract, PolygonPoolAddressesProviderRegistryContract, ArbitrumPoolAddressesProviderRegistryContract, OptimismPoolAddressesProviderRegistryContract, AvalanchePoolAddressesProviderRegistryContract,
      RewardsControllerContract, PolygonRewardsControllerContract, ArbitrumRewardsControllerContract, OptimismRewardsControllerContract, AvalancheRewardsControllerContract
     } = require("../generated/src/Handlers.bs.js");

// MyAwesomeContractContract.AwesomeEvent.loader(({ event, context }) => {
//   let _ = context.awesomeEvent.load(event.params.identifier);
// });

// MyAwesomeContractContract.AwesomeEvent.handler(({ event, context }) => {
//   let awesomeEventObject = context.awesomeEvent.get(event.params.identifier);
//   context.awesomeEvent.set(awesomeEventObject);
// });
AaveOracleContract.AssetSourceUpdated.loader = (event, context) => {
  context.AssetSourceUpdated.load(AssetSourceUpdated);
};

AaveOracleContract.AssetSourceUpdated.handler = (event, context) => {
  let entity = context.AssetSourceUpdated.get(AssetSourceUpdated);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      asset: event.params.asset,
      source: event.params.source,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
  }

  context.AssetSourceUpdated.set(entity);
};

// FallbackOracleUpdated Event Handler
AaveOracleContract.FallbackOracleUpdated.loader = (event, context) => {
  context.FallbackOracleUpdated.load(FallbackOracleUpdated);
};

AaveOracleContract.FallbackOracleUpdated.handler = (event, context) => {
  let entity = context.FallbackOracleUpdated.get(FallbackOracleUpdated);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      fallbackOracle: event.params.fallbackOracle,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
  }

  context.FallbackOracleUpdated.set(entity);
};

// BaseCurrencySet Event Handler
AaveOracleContract.BaseCurrencySet.loader = (event, context) => {
  context.BaseCurrencySet.load(BaseCurrencySet);
};

AaveOracleContract.BaseCurrencySet.handler = (event, context) => {
  let entity = context.BaseCurrencySet.get(BaseCurrencySet);

  if (!entity) {
    entity = {
      id: event.transactionHash,
      baseCurrency: event.params.baseCurrency,
      baseCurrencyUnit: event.params.baseCurrencyUnit,
      evtBlockTime: event.blockTimestamp,
      evtBlockNum: event.blockNumber,
      contractAddress: event.srcAddress
    };
  }

  context.BaseCurrencySet.set(entity);
};
