

package ca.ensf607.vet123.api.ormControllers;

import org.springframework.data.jpa.repository.JpaRepository;

interface AnimalStatusRepository extends JpaRepository<AnimalStatus, Long> {

}
