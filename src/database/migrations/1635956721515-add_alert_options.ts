import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addAlertOptions1635956721515 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'treefalls',
      new TableColumn({
        name: 'eventType',
        type: 'varchar',
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('treefalls', 'eventType');

    await queryRunner.dropTable('treefalls');
  }
}
