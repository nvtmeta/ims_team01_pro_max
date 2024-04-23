package fsa.training.ims_team01.repository;

import fsa.training.ims_team01.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    //    existsByEmailAndDeletedFalse(String email);
    boolean existsByEmail(String email);
}
