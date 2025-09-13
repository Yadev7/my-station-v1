import { MigrationInterface, QueryRunner } from 'typeorm';

export class StationConfig1757693065836 implements MigrationInterface {
  name = 'StationConfig1757693065836';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "station-config"."owner" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying, "entreprise" jsonb, "contact" jsonb, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8e86b6b9f94aece7d12d465dc0c" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "station-config"."station" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "ICE" character varying, "RC" character varying, "TVACarb" double precision, "TVALubrifion" double precision, "TVAService" double precision, "TVACoffeeRest" double precision, "TVAShop" double precision, "DisplayHeaderFooter" boolean, "Logo" character varying, "IF" character varying, "StationImg" jsonb DEFAULT '[]', "StampsImg" character varying, "SignatureImg" character varying, "CNSS" character varying, "URLSITE" character varying, "adresse" jsonb, "contact" jsonb, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "ownerIdId" uuid, CONSTRAINT "PK_cad1b3e7182ef8df1057b82f6aa" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "station-config"."tank" ("MaxCapacity" integer, "MinCapacity" integer, "DirectSale" boolean, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "ContentType" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "stationIdId" uuid, CONSTRAINT "PK_7c34d00328207090cdf572bb15a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "station-config"."category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "station-config"."product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "unit" character varying, "qtyTotal" integer, "currentPrice" numeric(10,2), "purchasingPrice" numeric(10,2), "dateAppliedPrice" TIMESTAMP, "priceHistory" jsonb NOT NULL DEFAULT '[]', "description" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "tankRefId" uuid NOT NULL, "productCatId" uuid, "stationId" uuid, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "station-config"."islet" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "Description" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "stationIdId" uuid, CONSTRAINT "PK_cf9ecade845736e20dcdcbca8eb" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "station-config"."dispenser" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "brand" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "isletIdId" uuid, CONSTRAINT "PK_4592a75cf8f3747919908bbe26c" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "station-config"."nozzle" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "carbType" jsonb, "index" integer, "percentageOil" integer, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "dispenserIdId" uuid, CONSTRAINT "PK_163dd2d9e7a72710f5384e9cd56" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "station-config"."depot" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "adresse" jsonb, "contact" jsonb, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_90d6d40026ca8276389f30a0455" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "station-config"."station" ADD CONSTRAINT "FK_5fb98f9203e28e4da09d420b3c6" FOREIGN KEY ("ownerIdId") REFERENCES "station-config"."owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "station-config"."tank" ADD CONSTRAINT "FK_de598b458e528e8b24056321aff" FOREIGN KEY ("stationIdId") REFERENCES "station-config"."station"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "station-config"."product" ADD CONSTRAINT "FK_6ab7e41959e07490efa3b3c8cda" FOREIGN KEY ("tankRefId") REFERENCES "station-config"."tank"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "station-config"."product" ADD CONSTRAINT "FK_b515c5a7878777197fcb256e336" FOREIGN KEY ("productCatId") REFERENCES "station-config"."category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "station-config"."product" ADD CONSTRAINT "FK_7f9ea9c05dfd08825bb48e0ecf8" FOREIGN KEY ("stationId") REFERENCES "station-config"."station"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "station-config"."islet" ADD CONSTRAINT "FK_3fa6d441bd66f744076c286dea6" FOREIGN KEY ("stationIdId") REFERENCES "station-config"."station"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "station-config"."dispenser" ADD CONSTRAINT "FK_965c98ff85947865a38c0e2eb0a" FOREIGN KEY ("isletIdId") REFERENCES "station-config"."islet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "station-config"."nozzle" ADD CONSTRAINT "FK_054471eb7198cafed910e0239a6" FOREIGN KEY ("dispenserIdId") REFERENCES "station-config"."dispenser"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "station-config"."nozzle" DROP CONSTRAINT "FK_054471eb7198cafed910e0239a6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "station-config"."dispenser" DROP CONSTRAINT "FK_965c98ff85947865a38c0e2eb0a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "station-config"."islet" DROP CONSTRAINT "FK_3fa6d441bd66f744076c286dea6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "station-config"."product" DROP CONSTRAINT "FK_7f9ea9c05dfd08825bb48e0ecf8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "station-config"."product" DROP CONSTRAINT "FK_b515c5a7878777197fcb256e336"`,
    );
    await queryRunner.query(
      `ALTER TABLE "station-config"."product" DROP CONSTRAINT "FK_6ab7e41959e07490efa3b3c8cda"`,
    );
    await queryRunner.query(
      `ALTER TABLE "station-config"."tank" DROP CONSTRAINT "FK_de598b458e528e8b24056321aff"`,
    );
    await queryRunner.query(
      `ALTER TABLE "station-config"."station" DROP CONSTRAINT "FK_5fb98f9203e28e4da09d420b3c6"`,
    );
    await queryRunner.query(`DROP TABLE "station-config"."depot"`);
    await queryRunner.query(`DROP TABLE "station-config"."nozzle"`);
    await queryRunner.query(`DROP TABLE "station-config"."dispenser"`);
    await queryRunner.query(`DROP TABLE "station-config"."islet"`);
    await queryRunner.query(`DROP TABLE "station-config"."product"`);
    await queryRunner.query(`DROP TABLE "station-config"."category"`);
    await queryRunner.query(`DROP TABLE "station-config"."tank"`);
    await queryRunner.query(`DROP TABLE "station-config"."station"`);
    await queryRunner.query(`DROP TABLE "station-config"."owner"`);
  }
}
