import { MigrationInterface, QueryRunner } from 'typeorm';

export class StationConfig21757927772259 implements MigrationInterface {
  name = 'StationConfig21757927772259';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "loginName" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "loginName"`);
  }
}
