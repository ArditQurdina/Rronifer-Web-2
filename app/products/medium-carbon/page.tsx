import IndustrialRawMaterials from "./IndustrialRawMaterials";
import PrecisionMetricTable from "./PrecisionMetricTable";
import ElasticityEndurance from "./ElasticityEndurance";
import DiameterVarianceMatrix from "./DiameterVarianceMatrix";
export default function MediumCarbon() {
    return (
        <>
            <IndustrialRawMaterials />
            <PrecisionMetricTable />
            <ElasticityEndurance />
            <DiameterVarianceMatrix />
        </>
    )
}