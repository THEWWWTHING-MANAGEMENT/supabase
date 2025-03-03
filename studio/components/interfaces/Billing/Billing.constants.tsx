import { IconArchive, IconCode, IconDatabase, IconKey, IconZap } from 'ui'

export const USAGE_BASED_PRODUCTS = [
  {
    title: 'Database',
    icon: <IconDatabase className="dark:text-scale-100" size={16} strokeWidth={2} />,
    features: [
      {
        key: 'db_size',
        attribute: 'total_db_size_bytes',
        title: 'Database size',
        units: 'bytes',
        costPerUnit: 0.125,
        tooltip: (
          <span>
            Billing is based on the average daily database size in GB throughout the billing period.{' '}
            <a
              href="https://supabase.com/docs/guides/platform/database-usage"
              target="_blank"
              rel="noreferrer"
            >
              Docs
            </a>
          </span>
        ),
      },
      {
        key: 'db_egress',
        attribute: 'total_egress_modified',
        title: 'Database egress',
        units: 'bytes',
        costPerUnit: 0.09,
        tooltip: (
          <span>
            Database egress contains any outgoing traffic (egress) from your database. Billing is
            based on the total sum of egress in GB throughout your billing period.
          </span>
        ),
      },
    ],
  },
  {
    title: 'Auth',
    icon: <IconKey className="dark:text-scale-100" size={16} strokeWidth={2} />,
    features: [
      {
        key: 'monthly_active_users',
        attribute: 'total_auth_billing_period_mau',
        title: 'Monthly Active Users',
        units: 'absolute',
        costPerUnit: 0.00325,
        tooltip: (
          <span>
            The amount of distinct users requesting your API throughout the billing period. Resets
            at the beginning of every billing period.
          </span>
        ),
      },
      {
        key: 'monthly_active_sso_users',
        attribute: 'total_auth_billing_period_sso_mau',
        title: 'Monthly Single Sign-On Users',
        units: 'absolute',
        costPerUnit: 0.015,
        tooltip: (
          <span>
            The amount of distinct Single Sign-On users requesting your API throughout the billing
            period. Resets at the beginning of every billing period.
          </span>
        ),
      },
    ],
  },
  {
    title: 'Storage',
    icon: <IconArchive className="dark:text-scale-100" size={16} strokeWidth={2} />,
    features: [
      {
        key: 'storage_size',
        attribute: 'total_storage_size_bytes',
        title: 'Storage space',
        units: 'bytes',
        costPerUnit: 0.021,
        tooltip: (
          <span>
            The storage size is the sum of all objects in your storage buckets. Billing is based on
            the average size in GB throughout your billing period.
          </span>
        ),
      },
      {
        key: 'storage_egress',
        attribute: 'total_storage_egress',
        title: 'Storage egress',
        units: 'bytes',
        costPerUnit: 0.09,
        tooltip: (
          <span>
            Storage egress contains any outgoing traffic (egress) from your storage buckets, only
            download operations are counted. We currently do not differentiate between no-cache and
            cache hits. Billing is based on the total amount of egress in GB throughout your billing
            period.
          </span>
        ),
      },
      {
        key: 'storage_image_render_count',
        attribute: 'total_storage_image_render_count',
        title: 'Storage Image Transformations',
        units: 'absolute',
        costPerUnit: 0.005,
        tooltip: (
          <span>
            We distinctly count all images transformed in the billing period, ignoring any
            transformations. Transforming one image with different transformations (i.e. once with
            height=50 and once with height=150), only counts as one. Resets at the beginning of
            every billing period.
          </span>
        ),
      },
    ],
  },
  {
    title: 'Functions',
    icon: <IconCode className="dark:text-scale-100" size={16} strokeWidth={2} />,
    features: [
      {
        key: 'func_count',
        attribute: 'total_func_count',
        title: 'Function Count',
        units: 'absolute',
        costPerUnit: 0.1,
        tooltip: (
          <span>
            We continuously monitor the amount of serverless functions in your project. Billing is
            based on the maximum amount of functions at any point in time throughout your billing
            period.
          </span>
        ),
      },

      {
        key: 'func_invocations',
        attribute: 'total_func_invocations',
        title: 'Function Invocations',
        units: 'absolute',
        costPerUnit: 0.000002,
        tooltip: (
          <span>
            Every serverless function invocation independent of response status is counted.
            Billing is based on the sum of all invocations throughout your billing period.
          </span>
        ),
      },
    ],
  },
  {
    title: 'Realtime',
    icon: <IconZap className="dark:text-scale-100" size={16} strokeWidth={2} />,
    features: [
      {
        key: 'realtime_message_count',
        attribute: 'total_realtime_message_count',
        title: 'Realtime Messages',
        units: 'absolute',
        costPerUnit: 0.0000025,
        tooltip: (
          <span>
            Billing is based on the total amount of messages throughout your billing period.
          </span>
        ),
      },

      {
        key: 'realtime_peak_connection',
        attribute: 'total_realtime_peak_connection',
        title: 'Realtime Concurrent Peak Connections',
        units: 'absolute',
        costPerUnit: 0.01,
        tooltip: (
          <span>
            Billing is based on the maximum amount of concurrent peak connections throughout your
            billing period.
          </span>
        ),
      },
    ],
  },
]
