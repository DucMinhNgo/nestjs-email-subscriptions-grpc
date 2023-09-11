import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Subscriber from './entities/subscriber.entity';
import { SubscribersService } from './subscriber.service';

@Module({
  imports: [TypeOrmModule.forFeature([Subscriber])],
  exports: [],
  controllers: [SubscribersService],
})
export class SubscribersModule { }