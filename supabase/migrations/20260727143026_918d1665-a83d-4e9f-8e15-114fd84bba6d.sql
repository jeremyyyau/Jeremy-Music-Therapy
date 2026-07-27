DROP POLICY IF EXISTS "Allow anonymous contact submissions" ON public.contact_submissions;

CREATE POLICY "Allow anonymous contact submissions" 
ON public.contact_submissions 
FOR INSERT 
TO anon 
WITH CHECK (
  length(trim(name)) > 0 
  AND length(trim(email)) > 0 
  AND length(trim(message)) > 0
  AND created_at <= now() + interval '1 minute'
);