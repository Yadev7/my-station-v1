import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCategoryParent1757947736371 implements MigrationInterface {
  name = 'AddCategoryParent1757947736371';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "station-config"."category" ADD "parent_id" uuid`,
    );
    await queryRunner.query(
      `ALTER TABLE "station-config"."category" ADD CONSTRAINT "FK_1117b4fcb3cd4abb4383e1c2743" FOREIGN KEY ("parent_id") REFERENCES "station-config"."category"("id") ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "station-config"."category" DROP CONSTRAINT "FK_1117b4fcb3cd4abb4383e1c2743"`,
    );
    await queryRunner.query(
      `ALTER TABLE "station-config"."category" DROP COLUMN "parent_id"`,
    );
  }
}
