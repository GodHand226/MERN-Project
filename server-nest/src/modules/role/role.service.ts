import { Injectable } from '@nestjs/common';
import { ClientSession, Schema as MongooseSchema } from 'mongoose';
import { GetQueryDto } from 'src/dto/getQueryDto';
<<<<<<< HEAD
import { RoleRepository } from '../../repositories/role.repository';
=======
import { RoleRepository } from './repository/role.repository';
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
import { CreateRoleDto } from './dto/createRole.dto';
import { UpdateRoleDto } from './dto/updateRole.dto';

@Injectable()
export class RoleService {
<<<<<<< HEAD
    constructor(private roleRepository: RoleRepository) {}

    async createRole(createRoleDto: CreateRoleDto, session: ClientSession) {
        return await this.roleRepository.createRole(createRoleDto, session);
    }

    async getRoleById(roleId: MongooseSchema.Types.ObjectId) {
        return await this.roleRepository.getRoleById(roleId);
    }

    async getRoles(getQueryDto: GetQueryDto) {
        return await this.roleRepository.getRoles(getQueryDto);
    }

    async updateRole(updateRoleDto: UpdateRoleDto, session: ClientSession) {
        return await this.roleRepository.updateRole(updateRoleDto, session);
    }

    async deleteRole(roleId: MongooseSchema.Types.ObjectId, session: ClientSession) {
        return await this.roleRepository.deleteRole(roleId, session);
    }
=======
  constructor(private roleRepository: RoleRepository) {}

  async createRole(createRoleDto: CreateRoleDto, session: ClientSession) {
    return await this.roleRepository.createRole(createRoleDto, session);
  }

  async getRoleById(roleId: MongooseSchema.Types.ObjectId) {
    return await this.roleRepository.getRoleById(roleId);
  }

  async getRoles(getQueryDto: GetQueryDto) {
    return await this.roleRepository.getRoles(getQueryDto);
  }

  async updateRole(updateRoleDto: UpdateRoleDto, session: ClientSession) {
    return await this.roleRepository.updateRole(updateRoleDto, session);
  }

  async deleteRole(
    roleId: MongooseSchema.Types.ObjectId,
    session: ClientSession,
  ) {
    return await this.roleRepository.deleteRole(roleId, session);
  }
>>>>>>> 694c3486e2b879d5ee63700a96d785550c955b67
}
