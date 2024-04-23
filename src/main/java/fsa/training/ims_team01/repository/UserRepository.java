package fsa.training.ims_team01.repository;

import fsa.training.ims_team01.model.dto.userDto.UserListDto;
import fsa.training.ims_team01.model.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    //    existsByEmailAndDeletedFalse(String email);
    boolean existsByEmail(String email);

    @Query("SELECT new fsa.training.ims_team01.model.dto.userDto.UserListDto" +
            "(u.id, u.username, u.fullName, u.dob, u.email, u.address, u.phone, u.note, u.gender, u.role, u.department) FROM User u WHERE u.status = 'ACTIVE'")
    Page<UserListDto> getListUser(Pageable pageable);
}
