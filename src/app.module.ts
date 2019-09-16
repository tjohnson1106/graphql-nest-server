import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CatsModule } from "./cats/cats.module";

@Module({
  imports: [
    CatsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql"
    }),
    MongooseModule.forRoot(
      "mongodb://thomas:interpol01@ds011308.mlab.com:11308/gql-nest"
    )
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
