import { NextPage } from 'next';

/** components */
import { Layout } from '@/components/layout';
import { Meta } from '@/components/meta';
import { TopTemplate } from '@/components/templates/top.tpl';

/** types, libs */
import { Event } from '@/types';
import { client } from '@/libs/microcms/client';

type Props = {
  events: Event[];
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'events', queries: { orders: '-date', limit: 3 } });

  return {
    props: {
      events: data.contents,
    },
  };
};

const Top: NextPage<Props> = ({ events }: Props) => {
  return (
    <>
      <Meta pageTitle="" pageUrl="" pageOgImage="" />
      <Layout>
        <TopTemplate topEvents={events.reverse()} />
      </Layout>
    </>
  );
};

export default Top;
