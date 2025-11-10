package com.rana.healthcare.repository;

import com.rana.healthcare.models.HealthReport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HealthReportRepository extends JpaRepository<HealthReport, Long> {

}
