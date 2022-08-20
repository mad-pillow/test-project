import { Test, TestingModule } from '@nestjs/testing';
import { PortalDemandResolver } from './portalDemand.resolver';

describe('PortalDemandResolver', () => {
  let resolver: PortalDemandResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PortalDemandResolver],
    }).compile();

    resolver = module.get<PortalDemandResolver>(PortalDemandResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
