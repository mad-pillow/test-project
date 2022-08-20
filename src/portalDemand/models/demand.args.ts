import { ArgsType, Field, registerEnumType } from '@nestjs/graphql';
import { IsEnum, IsOptional } from 'class-validator';

enum TransactionType {
  Sales = 'Sales',
  Rent = 'Rent',
}
registerEnumType(TransactionType, {
  name: 'TransactionType',
});

enum PropertyType {
  AllResidential = 'All Residential',
  TwinVillas = 'Residential - Twin Villas',
  Townhouse = 'Residential - Townhouse',
  Duplex = 'Residential - Duplex',
  Condominimum = 'Residential - Condominimum',
}
registerEnumType(PropertyType, {
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

@ArgsType()
export class DemandArgs {
  @Field(() => TransactionType, { defaultValue: TransactionType.Sales })
  @IsEnum(TransactionType)
  readonly transactionType: TransactionType;

  @Field(() => PropertyType)
  @IsEnum(PropertyType)
  readonly propertyType: PropertyType;

  @Field(() => [States])
  @IsEnum(States, { each: true })
  readonly state: States[];

  @Field(() => String, { nullable: true })
  @IsOptional()
  readonly place: string;

  @Field(() => PropertySize)
  @IsEnum(PropertySize)
  readonly propertySize: PropertySize;

  @Field(() => PropertyPrice)
  @IsEnum(PropertyPrice)
  readonly propertyPrice: PropertyPrice;
}
