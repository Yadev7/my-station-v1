import { MigrationInterface, QueryRunner } from 'typeorm';

export class StationConfig31757945199474 implements MigrationInterface {
  name = 'StationConfig31757945199474';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "station-config"."category" ADD "parentId" uuid`,
    );
    await queryRunner.query(
      `ALTER TABLE "station-config"."category" ADD CONSTRAINT "FK_d5456fd7e4c4866fec8ada1fa10" FOREIGN KEY ("parentId") REFERENCES "station-config"."category"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "station-config"."category" DROP CONSTRAINT "FK_d5456fd7e4c4866fec8ada1fa10"`,
    );
    await queryRunner.query(
      `ALTER TABLE "station-config"."category" DROP COLUMN "parentId"`,
    );
  }
}
