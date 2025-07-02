import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Linkedin } from 'lucide-react';

const students = [
  {
    name: "Akansha chaurasia",
    title: "Domain Support Specialist @ Ericsson India Global",
    avatar: "https://media.licdn.com/dms/image/v2/C4E03AQGUv_4wyCC6fg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1522737007614?e=1752710400&v=beta&t=oMb1vPnm8BYJuedn-fqab0Nlgryvs_D7UIPO94ZepVc",
    linkedin: "https://www.linkedin.com/in/akansha-chaurasia-681718119/"
  },
  {
    name: "Manikandan Prakash",
    title: "DevOps Engineer @smallcase",
    avatar: "https://media.licdn.com/dms/image/v2/D4E03AQFiY07rDFiZ1A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1698246875639?e=1752710400&v=beta&t=rl9_TZv1--t0V7bo_JrysuiGkhvKQ5u3gxyH5FtG3xo",
    linkedin: "https://www.linkedin.com/in/manikandan-prakash/"
  },
  {
    name: "Dibyaraj Datta",
    title: "Process Associate at Netscribes",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQENeos_aDytsw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711478336339?e=1737590400&v=beta&t=eqdh3QVuz82VyuHWF78Bmif0EVec9xdh47F6VqZmmko",
    linkedin: "https://www.linkedin.com/in/dibyaraj-datta-b785661a5/"
  },
  {
    name: "Rushikesh Mahindrakar",
    title: "System Engineering",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQH9caqLtsFOKw/profile-displayphoto-shrink_200_200/B4DZPdW6uqGkAY-/0/1734585593402?e=1752710400&v=beta&t=qR3SqHZsyoZjDkWOgqtkmgTnr2cVnkMcjV-LIWSKt9Y",
    linkedin: "https://www.linkedin.com/in/rushikesh-mahindrakar-70b82537/"
  },
  {
    name: "Himanshu Sahu",
    title: "Java Backend Developer",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFqtDCGoMk54g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1673897788931?e=1737590400&v=beta&t=s2TDcsAQ2oqQ_DvoGT8yyUUaGvsfGDwan4Phjo1RFL0",
    linkedin: "https://www.linkedin.com/in/himanshu-sahu-2aa357237/"
  },
  {
    name: "Pratibha Kokil",
    title: "DevOps | Full Stack Developer",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHspredHFM_Ig/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729926571919?e=1737590400&v=beta&t=EopKPQqmr1fMBHnO3vVCQ-iI51PNnI8XhKTWumH0CI0",
    linkedin: "https://www.linkedin.com/in/pratibhakokil/"
  }
];

const Testimonials: React.FC = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-50 via-black-50 to-gray-100 py-16 px-2 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-black text-sm sm:text-md text-center tracking-widest uppercase mb-2">Success Stories</h2>
          <h2 className="text-black text-2xl sm:text-3xl font-bold mb-10 text-center">
            Meet Our <span className="text-k8s-blue">K8s Achievers</span>
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {students.map((student, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition-shadow duration-300 group min-w-0"
                style={{ minHeight: 260 }}
              >
                <div className="relative mb-4">
                  <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 opacity-20 group-hover:opacity-40 transition" />
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-lg relative z-10"
                    onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = '/default-avatar.png'; }}
                  />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-1 truncate w-full" title={student.name}>{student.name}</h3>
                <p className="text-gray-500 text-xs sm:text-sm mb-4 truncate w-full" title={student.title}>{student.title}</p>
                <a
                  href={student.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-xs hover:bg-blue-600 hover:text-white transition"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Removed Kubernetes Terminal Window Element from here */}
    </>
  );
};

const terminalLinesData = [
  "$ kubectl create deployment nginx-deploy --image=nginx",
  "deployment.apps/nginx-deploy created",
  "$ kubectl get pods",
  "NAME                            READY   STATUS    RESTARTS   AGE",
  "nginx-deploy-7c57f8657d-abcde  1/1     Running   0          5s",
  "$ kubectl expose deployment nginx-deploy --port=80 --type=NodePort",
  "service/nginx-deploy exposed"
];

function K8sTerminalBody() {
  const [lines, setLines] = React.useState<string[]>([]);
  const [typed, setTyped] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);

  React.useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (index < terminalLinesData.length) {
      if (charIndex < terminalLinesData[index].length) {
        timeout = setTimeout(() => {
          setTyped((prev) => prev + terminalLinesData[index][charIndex]);
          setCharIndex((c) => c + 1);
        }, 45);
      } else {
        timeout = setTimeout(() => {
          setLines((prev) => [...prev, typed]);
          setTyped("");
          setCharIndex(0);
          setIndex((i) => i + 1);
        }, 350);
      }
    } else {
      timeout = setTimeout(() => {
        setLines([]);
        setTyped("");
        setCharIndex(0);
        setIndex(0);
      }, 1200);
    }
    return () => clearTimeout(timeout);
  }, [index, charIndex, typed]);

  // Helper to animate each character
  const renderTyped = () => {
    return (
      <span style={{ display: 'inline-block' }}>
        {typed.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18, delay: i * 0.03 }}
            style={{ display: 'inline-block' }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    );
  };

  return (
    <div className="terminal-body" style={{ background: '#0f172a', padding: 20, flexGrow: 1, fontSize: 14, color: '#fff', overflowY: 'auto', whiteSpace: 'pre-wrap', lineHeight: 1.4 }}>
      <div id="terminal-lines">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <code>{line}</code>
          </motion.div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <code>{renderTyped()}</code>
        <motion.span
          className="cursor"
          style={{ display: 'inline-block', marginLeft: 2, color: '#fff' }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          █
        </motion.span>
      </div>
      <style>{`@keyframes blink { 50% { opacity: 0; } } .cursor { animation: blink 1s step-start infinite; }`}</style>
    </div>
  );
}

// PostCard component to display individual testimonial
const PostCard: React.FC<{ post: any }> = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = post.content.split(' ');
  const truncatedContent = words.length > 80 ? words.slice(0, 80).join(' ') + '...' : post.content;
  const handleToggleContent = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div className="bg-[#ffffff] text-black mt-4 shadow-md w-full p-4 rounded-lg">
      <div className="pb-2">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-300">
            <img className="h-full w-full object-cover rounded-full" src={post.author.avatar || '/default-avatar.png'} alt={post.author.name} />
          </div>
          <div className="flex-grow">
            <h3 className="text-sm font-semibold">{post.author.name}</h3>
            <p className="text-xs text-gray-400">{post.author.title}</p>
          </div>
          {post.author.linkedin && (
            <a href={post.author.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${post.author.name}'s LinkedIn profile`}>
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
            </a>
          )}
        </div>
      </div>
      <div className="pt-2 space-y-2 text-xs sm:text-sm">
        <p>
          {isExpanded ? post.content : truncatedContent}
          {words.length > 80 && (
            <span 
              className="text-blue-500 cursor-pointer ml-1" 
              onClick={handleToggleContent}
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </span>
          )}
        </p>
      </div>
      <p className="mt-4 text-xs text-gray-400">{post.timestamp}</p>
    </div>
  );
};

export { K8sTerminalBody };
export default Testimonials;