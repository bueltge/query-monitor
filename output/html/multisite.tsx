import {
	PanelProps,
	EmptyPanel,
	TabularPanel,
	getCallerCol,
	getComponentCol
} from 'qmi';
import {
	DataTypes,
} from 'qmi/data-types';
import * as React from 'react';

import {
	__,
	sprintf,
} from '@wordpress/i18n';

export const Multisite = ( { data }: PanelProps<DataTypes['multisite']> ) => {
	if ( ! data.switches.length ) {
		return (
			<EmptyPanel>
				<p>
					{ __( 'No data logged.', 'query-monitor' ) }
				</p>
			</EmptyPanel>
		);
	}

	return <TabularPanel
		title={ __( 'Multisite', 'query-monitor' ) }
		cols={ {
			i: {
				className: 'qm-num',
				heading: '#',
				render: ( row, i ) => ( i + 1 ),
			},
			function: {
				heading: __( 'Function', 'query-monitor' ),
				render: ( row ) => (
					<code>
						{ row.to ? (
							sprintf(
								'switch_to_blog(%d)',
								row.new
							)
						) : (
							'restore_current_blog()'
						) }
					</code>
				),
			},
			site: {
				heading: __( 'Site Switch', 'query-monitor' ), // @todo improve this label
				render: ( row ) => (
					<code>
						{ row.prev } &rarr; { row.new }
					</code>
				),
			},
			caller: getCallerCol( data.switches ),
			component: getComponentCol( data.switches, data.component_times ),
		}}
		data={ data.switches }
	/>
};
