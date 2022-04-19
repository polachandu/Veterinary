
package ca.ensf607.vet123.api.ormControllers;

import org.springframework.data.jpa.repository.JpaRepository;

interface PrescriptionRepository extends JpaRepository<PrescriptionRecords, Long> {

}
