import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Args, Query, Resolver } from '@nestjs/graphql';
import axios from 'axios';
import { DemandArgs } from './models/demand.args';
import {
  DemandForPlaceModel,
  DemandPlaceForCurrentMonthCollectionModel,
} from './models/portalDemand.model';

@Resolver()
export class PortalDemandResolver {
  private readonly baseUrl: string;
  constructor(
    private configService: ConfigService,
    private readonly logger: Logger,
  ) {
    this.baseUrl = this.configService.get<string>('baseUrl');
  }

  @Query(() => DemandPlaceForCurrentMonthCollectionModel)
  async demandCurrentMonth(
    @Args() args: DemandArgs,
  ): Promise<DemandPlaceForCurrentMonthCollectionModel> {
    this.logger.log(
      `Fetching demand data ===> started with arguments: ${JSON.stringify(
        args,
      )}`,
    );

    try {
      // Fetch external API
      const result = await axios.post(
        `${this.baseUrl}/demand-current-month`,
        args,
      );

      this.logger.log(
        `Fetching demand data ===> succeeded with result: ${JSON.stringify(
          result.data,
        )}`,
      );
      return result.data;
    } catch (error) {
      this.logger.log('Fatching demand data ===> failed');
      this.logger.error(error);
    }
  }

  @Query(() => DemandForPlaceModel)
  async demandPlace(@Args('id') id: string): Promise<DemandForPlaceModel> {
    this.logger.log(
      `Fetching demand data ===> started with place id: ${JSON.stringify(id)}`,
    );

    try {
      // Fetch external API
      const result = await axios.get(`${this.baseUrl}/demand-place?id=${id}`);

      this.logger.log(
        `Fetching demand data ===> succeeded with result: ${JSON.stringify(
          result.data,
        )}`,
      );
      return result.data;
    } catch (error) {
      this.logger.log('Fatching demand data ===> failed');
      this.logger.error(error);
    }
  }
}
