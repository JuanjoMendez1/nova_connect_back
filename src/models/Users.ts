import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  HasMany,
  UpdatedAt,
  CreatedAt,
} from 'sequelize-typescript';

export interface UsersAttributes {
  id: number;
  name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  group_id: number;
  created_at: Date;
  updated_at: Date;
  session_active: number;
  session_allowed: number;
  status: boolean;
}

@Table({ tableName: 'User', timestamps: true })
export class Users
  extends Model<UsersAttributes, UsersAttributes>
  implements UsersAttributes
{
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
  id: number;

  @Column({ type: DataType.STRING(255) })
  name: string;

  @Column
  last_name: string;

  @Column({ type: DataType.STRING(255) })
  email: string;

  @Column
  phone: string;

  @Column({ type: DataType.STRING(255) })
  password: string;

  @Column
  group_id: number;

  @Column
  session_active: number;

  @Column
  session_allowed: number;

  @CreatedAt
  @Column({ type: DataType.DATE })
  created_at: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE })
  updated_at: Date;

  @Column
  status: boolean;
}
