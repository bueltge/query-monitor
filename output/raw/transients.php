<?php declare(strict_types = 1);
/**
 * Raw transients output.
 *
 * @package query-monitor
 */

class QM_Output_Raw_Transients extends QM_Output_Raw {

	/**
	 * Collector instance.
	 *
	 * @var QM_Collector_Transients Collector.
	 */
	protected $collector;

	/**
	 * @return string
	 */
	public function name() {
		return __( 'Transients', 'query-monitor' );
	}

	/**
	 * @return array<string, mixed>
	 */
	public function get_output() {
		$output = array();
		$data = $this->collector->get_data();

		if ( empty( $data->trans ) ) {
			return $output;
		}

		$transients = array();

		foreach ( $data->trans as $transient ) {
			$transients[] = array(
				'name' => $transient['name'],
				'type' => $transient['type'],
				'size' => $transient['size'],
				'expiration' => $transient['expiration'],
				'stack' => $transient['trace']->get_stack(),
			);
		}

		$output['total'] = count( $transients );
		$output['transients'] = $transients;

		return $output;
	}
}

/**
 * @param array<string, QM_Output> $output
 * @param QM_Collectors $collectors
 * @return array<string, QM_Output>
 */
function register_qm_output_raw_transients( array $output, QM_Collectors $collectors ) {
	$collector = QM_Collectors::get( 'transients' );
	if ( $collector ) {
		$output['transients'] = new QM_Output_Raw_Transients( $collector );
	}
	return $output;
}

add_filter( 'qm/outputter/raw', 'register_qm_output_raw_transients', 30, 2 );
