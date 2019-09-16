import { Module } from "@nestjs/common";

import { CatsResolver } from "./cats.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { CatsSchema } from "./cats.schema";
import { CatsService } from "./cats.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "Cat",
        schema: CatsSchema
      }
    ])
  ],
  providers: [CatsResolver, CatsService]
})
export class CatsModule {}
