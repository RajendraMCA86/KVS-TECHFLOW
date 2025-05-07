import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { teamMembers } from '@/data';
import TeamMemberDetail from '@/components/sections/TeamMemberDetail';
import PageHeader from '@/components/layout/PageHeader';

export const generateMetadata = ({ params }: { params: { id: string } }): Metadata => {
  const member = teamMembers.find((m) => m.id === params.id);
  
  if (!member) {
    return {
      title: 'Team Member Not Found | KVS Techflow IT Solution',
      description: 'The requested team member could not be found.',
    };
  }
  
  return {
    title: `${member.name} - ${member.role} | KVS Techflow IT Solution`,
    description: `Learn more about ${member.name}, ${member.role} at KVS Techflow IT Solution.`,
  };
};

export default function TeamMemberPage({ params }: { params: { id: string } }) {
  const member = teamMembers.find((m) => m.id === params.id);
  
  if (!member) {
    notFound();
  }
  
  return (
    <>
      <PageHeader 
        title={member.name}
        description={member.role}
      />
      <TeamMemberDetail member={member} />
    </>
  );
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    id: member.id,
  }));
}