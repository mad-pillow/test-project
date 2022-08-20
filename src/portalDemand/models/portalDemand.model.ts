import {
  Field,
  Float,
  ID,
  Int,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';

enum TransactionType {
  Sales = 'Sales',
  Rent = 'Rent',
}
registerEnumType(TransactionType, {
  name: 'TransactionType',
});

enum PropertType {
  AllResidential = 'All Residential',
  TwinVillas = 'Residential - Twin Villas',
  Townhouse = 'Residential - Townhouse',
  Duplex = 'Residential - Duplex',
  Condominimum = 'Residential - Condominimum',
}
registerEnumType(PropertType, {
  name: 'PropertType',
});

enum States {
  KualaLumpur = 'Kuala Lumpur',
  Johor = 'Johor',
  Kedah = 'Kedah',
  Kelantan = 'Kelantan',
  Labuan = 'Labuan',
}
registerEnumType(States, {
  name: 'States',
});

enum PropertySize {
  AllSizes = 'All Sizes',
  S = '401 - 500',
  M = '501 - 750',
  L = '750 - 1000',
  XL = '1000 - 1500',
}
registerEnumType(PropertySize, {
  name: 'PropertySize',
});

enum PropertyPrice {
  AllPrices = 'All Prices',
  S = '0.5 - 1',
  M = '1 - 2',
  L = '2 - 3',
  XL = '3 - 5',
}
registerEnumType(PropertyPrice, {
  name: 'PropertyPrice',
});

@ObjectType()
export class DemandModel {
  @Field(() => Int)
  rankInState: number;

  @Field(() => Int)
  rankInCountry: number;

  @Field(() => Float)
  supplyDemand: number;

  @Field(() => Float)
  supplyDemandGrowth: number;

  @Field(() => Float)
  supplyDemandGrowthLastYearQuater: number;

  @Field(() => Float)
  demandMedianPrice: number;

  @Field(() => Float)
  medianPriceGrowth: number;

  @Field(() => Int)
  demandMedianPsf: number;

  @Field(() => Float)
  medianPsfGrowth: number;

  @Field(() => Int)
  supplyRankInState: number;

  @Field(() => Int)
  supplyRankInCountry: number;

  @Field(() => Int)
  demandRankInState: number;

  @Field(() => Int)
  demandRankInCountry: number;

  @Field(() => Float)
  supplyGrowth: number;

  @Field(() => Int)
  demandGrowth: number;

  @Field(() => Int)
  supplyGrowthLastYearQuater: number;

  @Field(() => Int)
  demandGrowthLastYearQuater: number;

  @Field(() => Int)
  percentile25th: number;

  @Field(() => Int)
  percentile75th: number;
}

@ObjectType()
export class DemandPlaceForCurrentMonthModel {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => DemandModel)
  demandData: DemandModel;
}

// Describe demand for current month data model

@ObjectType()
export class DemandPlaceForCurrentMonthCollectionModel {
  @Field(() => [DemandPlaceForCurrentMonthModel])
  demandCurrentMonthData: DemandPlaceForCurrentMonthModel[];
}

// Describe demand for place data model

@ObjectType()
export class MonthlyDemandDataModel {
  @Field(() => String)
  timeStamp: string;

  @Field(() => DemandModel)
  demandData: DemandModel;
}

@ObjectType()
export class DemandForPlaceModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => [MonthlyDemandDataModel])
  monthlyData: MonthlyDemandDataModel[];
}
